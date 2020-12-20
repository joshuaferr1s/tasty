const faunadb = require('faunadb');

const q = faunadb.query

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') return { statusCode: 405, body: 'Method Not Allowed.' };

  try {
    const client = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET,
    });
    let response;
    if (event.queryStringParameters.id) {
      response = await client.query(
        q.Get(
          q.Match(q.Index('slug-index'), event.queryStringParameters.id)
        )
      );
    } else {
      response = await client.query(q.Map(
        q.Paginate(q.Documents(q.Collection('recipes'))),
        q.Lambda(x => q.Get(x))
      ));
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: error.message,
    };
  }
};
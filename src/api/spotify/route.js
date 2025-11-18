// // pages/api/spotify.js
// 'use server';
// import fetch from 'node-fetch';

// const getAccessToken = async () => {
//   const clientSecret = process.env.CLIENT_SECRET;  // Replace with your Client Secret
//   const clientId = process.env.CLIENT_ID;  // Replace with your Client ID

//   console.log("client id :" , clientId);
//   console.log("client secret:",clientSecret);

//   const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Basic ${authString}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: 'grant_type=client_credentials', // Client Credentials Flow
//   });

//   const data = await response.json();
//   return data.access_token;  // Access Token to be used in future requests
// };

// export default async function handler(req, res) {
//   try {
//     const accessToken = await getAccessToken();  // Get the access token

//     // Example: If you're fetching tracks from an artist's album or playlist
//     const artistId = '6NRXVncKllLlgU2JMamvvt';  // Replace with your "Artint" artist ID
//     const tracksResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,  // Use the access token
//       },
//     });

//     const tracksData = await tracksResponse.json();
//     res.status(200).json(tracksData);  // Return the track data to the frontend
//   } catch (error) {
//     console.error('Error fetching track data:', error);
//     res.status(500).json({ error: 'Failed to fetch track data' });
//   }
// }
'use server';
import fetch from 'node-fetch';

const getAccessToken = async () => {
  const clientId = process.env.CLIENT_ID;  // Replace with your Client ID
  const clientSecret = process.env.CLIENT_SECRET;  // Replace with your Client Secret

  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials', // Client Credentials Flow
  });

  const data = await response.json();
  console.log('Access Token Response:', data);  // Log the response to check the token

  if (data.error) {
    console.error('Spotify Error:', data.error_description);
    throw new Error('Error fetching access token');
  }

  return data.access_token;  // Return the valid access token
};

export default async function handler(req, res) {
  try {
    const accessToken = await getAccessToken();  // Get the access token
    // console.log('Access Token:', accessToken); 

    const artistId = '6NRXVncKllLlgU2JMamvvt';  // Replace with your "Artint" artist ID
    const tracksResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,  // Use the access token
      },
    });

    const tracksData = await tracksResponse.json();
    res.status(200).json(tracksData);  // Send the tracks data back to the frontend
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch track data' });
  }
}
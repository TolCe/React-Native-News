import axios from 'react-native-axios';

export default jsonData = async function (url, sendData) {
  sendData["ref"] = "5380f5dbcc3b1021f93ab24c3a1aac24"

  return await axios.get('https://www.jsonbulut.com/json/' + url, {
    params: sendData
  }).then(function (res) {
    return res.data
  })
    .catch(function (error) {
    });
}

// product json services
export const product = async function (data) {
  const url = "product.php"
  const dt = await jsonData(url, data)
  return dt
}
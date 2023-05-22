import axios from 'axios';
const idInstance = JSON.parse(localStorage.getItem('user'))?.id;
const apiTokenInstance = JSON.parse(localStorage.getItem('user'))?.token;

export async function sendMsg(tel, msg) {
  try {
    const body = {
      chatId: `${tel}@c.us`,
      message: `${msg}`,
    };

    const response = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      body
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteNotification(receiptId) {
  try {
    const response = await axios.delete(
      `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function receiveMsg() {
  try {
    const { data } = await axios.get(
      `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
    );
    if (data) {
      let webhookBody = data.body;
      if (
        webhookBody.typeWebhook === 'incomingMessageReceived' &&
        webhookBody.messageData.typeMessage === 'textMessage'
      ) {
        await deleteNotification(data.receiptId);
        return webhookBody;
      } else if (webhookBody.typeWebhook === 'stateInstanceChanged') {
        console.log('stateInstanceChanged');
        console.log(`stateInstance=${webhookBody.stateInstance}`);
      } else if (webhookBody.typeWebhook === 'outgoingMessageStatus') {
        console.log('outgoingMessageStatus');
        console.log(`status=${webhookBody.status}`);
      } else if (webhookBody.typeWebhook === 'deviceInfo') {
        console.log('deviceInfo');
        console.log(`status=${webhookBody.deviceData}`);
      }
      await deleteNotification(data.receiptId);
    }
    return null;
  } catch (ex) {
    console.error(ex);
  }
  console.log('End');
}

const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

// 送信先（ユーザーID or グループID）
const TO = process.env.LINE_TO;

async function main() {
  await client.pushMessage(TO, {
    type: 'video',
    originalContentUrl:
      'https://ユーザー名.github.io/hanamibot/sleep.mp4',
    previewImageUrl:
      'https://ユーザー名.github.io/hanamibot/sleep.jpg'
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

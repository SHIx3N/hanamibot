const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

const TO = process.env.LINE_TO;

async function main() {
  await client.pushMessage(TO, {
    type: 'video',
    originalContentUrl:
      'https://github.com/SHIx3N/hanamibot/raw/refs/heads/main/docs/sleep.mp4',
    previewImageUrl:
      'https://github.com/SHIx3N/hanamibot/blob/main/docs/sleep.jpg'
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

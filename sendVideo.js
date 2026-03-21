const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

const TO = process.env.LINE_TO;

// --------- 時刻待機用 ----------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitUntil20JST() {
  console.log('Waiting until 20:00 JST...');
  while (true) {
    const now = new Date();

    const jstHour = (now.getUTCHours() + 9) % 24;
    const jstMin = now.getUTCMinutes();
    const jstSec = now.getUTCSeconds();

    if (jstHour === 21 && jstMin === 5 && jstSec === 0) {
      console.log('20:00 JST reached');
      break;
    }

    await sleep(1000);
  }
}
// --------------------------------

async function main() {
  // 20:00まで待機
  await waitUntil20JST();

  // LINE送信
  await client.pushMessage(TO, {
    type: 'video',
    originalContentUrl:
      'https://raw.githubusercontent.com/SHIx3N/hanamibot/main/docs/sleep.mp4',
    previewImageUrl:
      'https://raw.githubusercontent.com/SHIx3N/hanamibot/main/docs/sleep.jpg'
  });

  console.log('Video sent successfully');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

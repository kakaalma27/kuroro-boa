const axios = require("axios");
const fs = require("fs");
const os = require("os");
const readline = require("readline");

const userAgentGenerator = {
  edge: function () {
    const edgeVersion = Math.floor(Math.random() * 100) + 90;
    const chromeVersion = Math.floor(Math.random() * 100) + 96;
    const safariVersion = Math.floor(Math.random() * 100) + 10;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform =
      os.platform() === "win32"
        ? "Windows NT 10.0; Win64; x64"
        : "Macintosh; Intel Mac OS X 10_15_17";
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.0.0 Safari/${webkitVersion}.36 Edg/${edgeVersion}.0.1901.203`;
    return userAgent;
  },
  chrome: function () {
    const windowsNtVersion = Math.floor(Math.random() * 100) + 7;
    const chromeVersion = Math.floor(Math.random() * 100) + 96;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform =
      os.platform() === "win32"
        ? `Windows NT ${windowsNtVersion}.0; Win64; x64`
        : "Macintosh; Intel Mac OS X 10_15_17";
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.3163.100 Safari/${webkitVersion}.36`;
    return userAgent;
  },
  firefox: function () {
    const windowsNtVersion = Math.floor(Math.random() * 100) + 7;
    const firefoxVersion = Math.floor(Math.random() * 26) + 95;
    const geckoVersion = Math.floor(Math.random() * 30) + 20100101;
    const osPlatform =
      os.platform() === "win32"
        ? `Windows NT ${windowsNtVersion}.0; Win64; x64`
        : "Macintosh; Intel Mac OS X 10_15_17";
    const userAgent = `Mozilla/5.0 (${osPlatform}; rv: ${firefoxVersion}.0) Gecko/${geckoVersion} Firefox/${firefoxVersion}.0`;
    return userAgent;
  },
  safari: function () {
    const windowsNtVersion = Math.floor(Math.random() * 100) + 7;
    const safariVersion = Math.floor(Math.random() * 100) + 10;
    const webkitVersion = Math.floor(Math.random() * 100) + 500;
    const osPlatform =
      os.platform() === "win32"
        ? `Windows NT ${windowsNtVersion}.0; Win64; x64`
        : "Macintosh; Intel Mac OS X 10_15_17";
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.1.15 (KHTML, like Gecko) Version/${safariVersion}.1.15 Safari/${webkitVersion}.1.15`;
    return userAgent;
  },
  android: function () {
    const edgeVersion = Math.floor(Math.random() * 25) + 90;
    const androidVersion = Math.floor(Math.random() * 8) + 5;
    const chromeVersion = Math.floor(Math.random() * 20) + 96;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = Math.floor(Math.random() * 10);
    const userAgent = `Mozilla/5.0 (Linux; Android ${androidVersion}.${osPlatform}; K) AppleWebKit/5${webkitVersion}37.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.0.0 Mobile Safari/${webkitVersion}.36 EdgA/${edgeVersion}.0.1901.196`;
    return userAgent;
  },
  ios: function () {
    const iosVersion = Math.floor(Math.random() * 8) + 9;
    const edgeVersion = Math.floor(Math.random() * 25) + 90;
    const safariVersion = Math.floor(Math.random() * 6) + 10;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform = Math.floor(Math.random() * 10);
    const userAgent = `Mozilla/5.0 (iPhone; CPU iPhone OS ${iosVersion}_${osPlatform} like Mac OS X) AppleWebKit/${webkitVersion}.1.15 (KHTML, like Gecko) EdgiOS/${edgeVersion}.0.1901.187 Version/${safariVersion}.0 Mobile/15E148 Safari/${webkitVersion}.1`;
    return userAgent;
  },
};
function getUser(bearerQuery, randomUserAgent) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://ranch-api.kuroro.com/api/Game/GetPlayerState",
      method: "GET",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${bearerQuery}`,
        priority: "u=1, i",
        "User-Agent": randomUserAgent,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://ranch.kuroro.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

function purposeUpgrade(bearerQuery, randomUserAgent) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://ranch-api.kuroro.com/api/Upgrades/GetPurchasableUpgrades",
      method: "GET",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${bearerQuery}`,
        priority: "u=1, i",
        "User-Agent": randomUserAgent,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://ranch.kuroro.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

function dailyClaim(bearerQuery, randomUserAgent) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://ranch-api.kuroro.com/api/DailyStreak/ClaimDailyBonus",
      method: "GET",
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${bearerQuery}`,
        priority: "u=1, i",
        "User-Agent": randomUserAgent,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://ranch.kuroro.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

function update(bearerQuery, randomUserAgent, upgradeId) {
  return axios.post(
    "https://ranch-api.kuroro.com/api/Upgrades/BuyUpgrade",
    {
      upgradeId,
    },
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${bearerQuery}`,
        priority: "u=1, i",
        "User-Agent": randomUserAgent,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://ranch.kuroro.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  );
}
function boosters(bearerQuery, randomUserAgent) {
  return axios.post(
    "https://ranch-api.kuroro.com/api/CoinsShop/BuyItem",
    { itemId: "raffle-ticket" },
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${bearerQuery}`,
        priority: "u=1, i",
        "User-Agent": randomUserAgent,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://ranch.kuroro.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  );
}
function saveCoordinates(bearerQuery, coordinates, randomUserAgent) {
  return axios.post("https://ranch-api.kuroro.com/api/Bf/Save", coordinates, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      authorization: `Bearer ${bearerQuery}`,
      priority: "u=1, i",
      "User-Agent": randomUserAgent,
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://ranch.kuroro.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  });
}

function performAction(bearerQuery, feedAmount, mineAmount, randomUserAgent) {
  return axios.post(
    "https://ranch-api.kuroro.com/api/Clicks/MiningAndFeeding",
    {
      feedAmount,
      mineAmount,
    },
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        authorization: `Bearer ${bearerQuery}`,
        priority: "u=1, i",
        "User-Agent": randomUserAgent,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://ranch.kuroro.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  );
}

function bearerToken() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let bearerQueries = []; // Initialize as an array

    function askForToken() {
      rl.question(
        "Enter your bearerToken (or type 'done' to finish): ",
        (priv_key) => {
          if (priv_key.toLowerCase() === "done") {
            rl.close();
            resolve(bearerQueries); // Resolve with the array
          } else {
            bearerQueries.push(priv_key); // Add the new token to the array
            askForToken();
          }
        }
      );
    }

    askForToken();
  });
}

const randomUserAgent = userAgentGenerator.chrome();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const main = async () => {
  let cordinatShare = [{ x: 135, y: 412 }];
  let cordinatFeed = [{ x: 206, y: 208 }];

  try {
    let bearerQueries = await bearerToken();
    console.log("Number of bearerTokens:", bearerQueries.length);

    while (true) {
      // Infinite loop
      for (let index = 0; index < bearerQueries.length; index++) {
        let bearerQuery = bearerQueries[index];
        console.log(`Processing with bearerToken: ${bearerQuery}`);
        console.log("Login Successfully, trying to process...");
        let userInfo = await getUser(bearerQuery, randomUserAgent);
        energy = userInfo.energySnapshot.value;
        shards = userInfo.shards;

        while (energy > 0 || shards > 0) {
          await delay(150);

          userInfo = await getUser(bearerQuery, randomUserAgent);
          energy = userInfo.energySnapshot.value;
          shards = userInfo.shards;

          if (energy > 0) {
            console.log("Proses Running Mine...");
            console.log("Sisa Energy:", energy);
            await saveCoordinates(bearerQuery, cordinatShare, randomUserAgent);
            await performAction(bearerQuery, 0, 1, randomUserAgent);
            console.log("Total Shards:", shards);
          }

          if (shards > 0) {
            console.log("Proses Running Feed...");
            console.log("Sisa Shards:", shards);
            await saveCoordinates(bearerQuery, cordinatFeed, randomUserAgent);
            await performAction(bearerQuery, 1, 0, randomUserAgent);
          }
        }

        console.log("Proses selesai: Energy dan Shards keduanya 0.");
        try {
          await boosters(bearerQueries, randomUserAgent);
        } catch (e) {
          console.log("terjadi kesalahan pada pembelian tiket", e);
        }

        try {
          console.log("try Upgrades");
          const updatedUserInfo = await getUser(bearerQuery, randomUserAgent);
          const totalCoins = Math.round(updatedUserInfo.coinsSnapshot.value);
          console.log("Total cost :", totalCoins);

          const upgradeSkill = await purposeUpgrade(
            bearerQuery,
            randomUserAgent
          );
          const tolerance = totalCoins * 0.1;
          const matchingItems = [];

          upgradeSkill.forEach((item) => {
            if (item.canBePurchased) {
              const priceDifference = Math.abs(item.cost - totalCoins);
              if (priceDifference <= tolerance) {
                matchingItems.push(item);
              }
            }
          });

          if (matchingItems.length > 0) {
            const firstMatchingItem = matchingItems[0];
            console.log(
              `First Matching Item: Name: ${firstMatchingItem.name}, Cost: ${firstMatchingItem.cost}, upgradeId: ${firstMatchingItem.upgradeId}`
            );

            const upgradeId = firstMatchingItem.upgradeId;
            const result = await update(
              bearerQuery,
              randomUserAgent,
              upgradeId
            );
            console.log("Upgrades skill: ", result.statusText);
          } else {
            console.log("No matching items found.");
          }
        } catch (e) {
          console.log("terjadi kesalahan pada saat upgrade");
        }

        await delay(300); // Optional delay between bearer tokens
      }

      console.log(
        "Completed processing all bearer tokens. Waiting for 1 minute before restarting..."
      );
      await new Promise((resolve) => setTimeout(resolve, 12000)); // Wait for 1 minute before starting over
    }
  } catch (error) {
    console.log(error);
  }
};

main();

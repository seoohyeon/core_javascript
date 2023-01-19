import { isString } from "./typeOf.js";

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis;

//console.log(storage);

const albums = [
  {
    id: "album_0zie",
    title: "Nightmare",
    artist: "오월오일 ( 五月五日 )",
    "release-date": "2022.10.08",
    like: 147,
    "song-count": 5,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg/melon/resize/640/quality/100/optimize",
    },
  },
  {
    id: "album_9ipw",
    title: "흔들리지 않아 (Feat. 폴킴)",
    artist: "TRADE L",
    "release-date": "2022.10.07",
    like: 306,
    "song-count": 1,
    cover: {
      size: 640,
      quality: 100,
      src: "https://cdnimg.melon.co.kr/cm2/album/images/110/72/305/11072305_20221006135934_500.jpg/melon/resize/640/quality/100/optimize",
    },
  },
];

export function saveStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, serialize(value));
      resolve();
    } else {
      reject({ message: "key는 문자 타입 이어야 합니다." });
    }
  });
}

export function loadStorage(key) {
  return new Promise((resolve, reject) => {
    //promise쓰는 이유 : 나중에 then을 받으려고
    if (isString(key)) {
      resolve(deserialize(storage.getItem(key)));
    } else {
      reject({ message: "key는 문자 타입 이어야 합니다." });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key); // 키가 아무것도 없으면 전체 삭제
    resolve();
  });
}

/* saveStorage("name", albums);
loadStorage("name").then((res) => {
  console.log(res);
});
deleteStorage("name"); */

/* storage.setItem("name", "tiger"); //생성하기

console.log(storage.getItem("name")); //가져오기

storage.removeItem("name"); //제거하기 */
//storage.clear(); //싹다 날라감

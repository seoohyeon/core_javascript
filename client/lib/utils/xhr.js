const xhr = new XMLHttpRequest();
import { typeError } from "./../error/typeError.js";
console.log(xhr);

/* readyState
  0: uninitalized // 초기화 
  1: loading // 로딩
  2: loaded // 로딩이 완료된 
  3: interactive // 인터랙티브
  4: complete // 완료 
  */

// xhrData 함수 만들기 method, url

export function xhrData({
  //초기값 세팅이 쉽다. 구조분해할당을 또 할 필요가 없다.
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-contrl-Allow-Origin": "*",
  },
} = {}) {
  //options = {}를 구조분해 할당을 해서 { url~~} = {}로 나타냄

  // const {method, url, body} = options;  // 객체 구조분해할당

  xhr.open(method, url);
  /* 
  console.log(Object.entries(headers));
  Object.entries(headers).forEach(([key, value]) => {
    console.log(key, value);
    xhr.setRequestHeader(key, value);
  }); */

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; // 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        //console.log("통신 성공");

        onSuccess(JSON.parse(response));
      }
    } else {
      onFail("통신 실패");
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  onSuccess: (result) => {
    //console.log(result);
  },
  onFail: (err) => {
    //console.error(err);
  },
});

// 비동기 통신 오픈
/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "Kim-Seo-Hyoen",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
}); */

//console.log(xhr);

// shorthand property

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

/* 
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/3',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
 */

// Promise API

const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null,
};

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) typeError("서버와 통신할 url 인자는 반드시 필요합니다.");

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    // executor
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject("에러입니둥");
      }
    });
  });
}

/* xhrPromise({
  url: "",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "POST",
  });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "PUT",
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    body,
    method: "DELETE",
  });
};

xhrPromise
  .get("https://jsonplaceholder.typicode.com/users/3") // promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

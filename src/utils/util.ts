import { Message } from "element-ui";
import { Notify } from "vant";
import { MessageLevel } from "@/tsConstraint/enum";

export function isMobile(): Boolean {
  return /android|webos|ipod|iphone|blackberry/i.test(
    navigator.userAgent.toLocaleLowerCase()
  );
}

const vantMessageLevel = ["primary", "success", "warning", "danger"];
const elementMessageLevel = ["", "success", "warning", "error"];
export function rewriteMessage(message: string, msgLevel: MessageLevel) {
  // @ts-ignore 忽略下一行的ts检查
  isMobile() ? Notify({ message, type: vantMessageLevel[msgLevel] }) : Message({ message, type: elementMessageLevel[msgLevel] });// eslint-disable-line
}

// 通过code判断api请求是否成功
export function apiFilter4Code(response: any, successCode: Number): any {
  if (response.code === successCode) {
    return response.data;
  }
  rewriteMessage(response.message || "请求失败", MessageLevel.error);
}

const Week = ["日", "一", "二", "三", "四", "五", "六"];
export function parseDateToString(
  dateValue: string,
  formatStr: String = "yyyy/MM/dd HH:mm:ss"
): String {
  let str: String = formatStr;
  let date: Date = new Date(dateValue);
  str = str.replace(/yyyy|YYYY/, date.getFullYear().toString());
  str = str.replace(
    /yy|YY/,
    date.getFullYear() % 100 > 9
      ? (date.getFullYear() % 100).toString()
      : "0" + (date.getFullYear() % 100)
  );

  const month = date.getMonth() + 1;
  str = str.replace(
    /MM/,
    month > 9 ? month.toString() : "0" + month.toString()
  );
  str = str.replace(/M/g, month.toString());

  str = str.replace(/w|W/g, Week[date.getDay()]);

  str = str.replace(
    /dd|DD/,
    date.getDate() > 9 ? date.getDate().toString() : "0" + date.getDate()
  );
  str = str.replace(/d|D/g, date.getDate().toString());

  str = str.replace(
    /hh|HH/,
    date.getHours() > 9 ? date.getHours().toString() : "0" + date.getHours()
  );
  str = str.replace(/h|H/g, date.getHours().toString());
  str = str.replace(
    /mm/,
    date.getMinutes() > 9
      ? date.getMinutes().toString()
      : "0" + date.getMinutes()
  );
  str = str.replace(/m/g, date.getMinutes().toString());

  str = str.replace(
    /ss|SS/,
    date.getSeconds() > 9
      ? date.getSeconds().toString()
      : "0" + date.getSeconds()
  );
  str = str.replace(/s|S/g, date.getSeconds().toString());

  return str;
}

// 获取滚动高度
function getScrollTop(): number {
  const bodyScrollTop = document.body.scrollTop;
  const eleScrollTop = document.documentElement.scrollTop;
  return bodyScrollTop || eleScrollTop;
}

//获取文档总高度
function getScrollHeight(): number {
  const bodyScrollHeight = document.body.scrollHeight;
  const eleScrollHeight = document.documentElement.scrollHeight;
  return bodyScrollHeight - eleScrollHeight > 0
    ? bodyScrollHeight
    : eleScrollHeight;
}

//获取窗口高度
function getWindowHeight(): number {
  if (document.compatMode === "CSS1Compat") {
    return document.documentElement.clientHeight;
  }
  return document.body.clientHeight;
}

export function registScrollEvent(callback): void {
  window.onscroll = () => {
    const scrollParam = {
      scrollTop: getScrollTop(),
      scrollHeight: getScrollHeight(),
      windowHeight: getWindowHeight()
    };
    console.log(scrollParam);
    callback(scrollParam);
  };
}

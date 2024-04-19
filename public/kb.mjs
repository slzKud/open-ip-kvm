
import {keyCodeGen} from './ch9329_code.mjs';
const CH9329_FRAME_START=[87,171];
const CH9329_ADDR=0
const CH9329_SEND_KB_GENERAL_DATA=2
//Function Key bit:Rwin,Ralt,Rshift,RCtrl,Lwin,Lalt,Lshift,Lctrl
let funKeyBit=[0,0,0,0,0,0,0,0];
let stdKeyByte=[0,0,0,0,0,0];
let keyCodeTable = {};
keyCodeTable=keyCodeGen();
const keyArray= new Array(255);
keyArray.fill(0);
function isChar(key) {
  if (!key || key.length > 1) {
    return false;
  }
  const keyAscii = key.codePointAt(0);
  return keyAscii >= 32 && keyAscii <= 126;
}

export function sendEvent(channel, key, type) {
  let payload = new Array(14);
  payload.fill(0);
  payload[0] = CH9329_FRAME_START[0];
  payload[1] = CH9329_FRAME_START[1];
  payload[2] = CH9329_ADDR;
  payload[3] = CH9329_SEND_KB_GENERAL_DATA;
  if (type === 'keydown') {
    // console.log("按下"+String(key))
    keyEvent(key,1);
  } else if (type === 'keyup') {
    // console.log("释放"+String(key))
    keyEvent(key,0);
  } else if (type === 'reset') {
    // console.log("重置")
    keyArray.fill(0);
    funKeyBit.fill(0);
    stdKeyByte.fill(0);
  } else {
      return;
  }
  keyArray2Payload();
  payload[4] = 8;
  payload[5] = funKeyBit2Payload();
  payload[6] = 0;
  payload[7] = stdKeyByte[0];
  payload[8] = stdKeyByte[1];
  payload[9] = stdKeyByte[2];
  payload[10] = stdKeyByte[3];
  payload[11] = stdKeyByte[4];
  payload[12] = stdKeyByte[5];
  payload[13] = addSum(payload,13);
  console.log(payload)
  const msg = {
    type: 'write_serial',
    payload,
  };

  console.log(type, key, payload);
  channel.send(JSON.stringify(msg));
}
function keyEvent(keyCode,flag){
  if(keyCode == "ControlLeft"){
    funKeyBit[7] = flag;
    return 0;
  }
  if(keyCode == "ControlRight"){
    funKeyBit[1] = flag;
    return 0;
  }
  if(keyCode == "ShiftLeft"){
    funKeyBit[6] = flag;
    return 0;
  }
  if(keyCode == "ShiftRight"){
    funKeyBit[2] = flag;
    return 0;
  }
  if(keyCode == "AltLeft"){
    funKeyBit[5] = 5;
    return 0;
  }
  if(keyCode == "AltRight"){
    funKeyBit[1] = flag;
    return 0;
  }
  if(keyCodeTable[keyCode] != undefined){
    keyArray[keyCodeTable[keyCode]]=flag;
    return 0;
  }
}
function funKeyBit2Payload(){
  return (funKeyBit[0]<<7)|(funKeyBit[1]<<6)|(funKeyBit[2]<<5)|(funKeyBit[3]<<4)|(funKeyBit[4]<<3)|(funKeyBit[5]<<2)|(funKeyBit[6]<<1)|(funKeyBit[7]);
}
function keyArray2Payload(){
  let i = 0;
  let n = 0;
  stdKeyByte.fill(0);
  for(i=0;i<255;i=i+1){
    if(keyArray[i]==1){
      if(n>6){
        return 0;
      }
      stdKeyByte[n]=i;
      n=n+1;
    }
  }
  return 0;
}
function addSum(arrayList,len){
  let sum = 0;
  for(let i=0;i<len;i++){
    sum = sum +arrayList[i];
  }
  let result = sum & 0xff;
  return result
}
function sendSeqBuf(buf, channel) {
  channel.send(JSON.stringify({
    type: 'write_serial',
    payload: buf
  }));
}

function sleep(ms = 100) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export async function sendSequence(channel, str) {
  if (str.length > 8192) {
    return alert('sequence is too long')
  }

  let buf = [];

  for (let i = 0; i < str.length; i += 1) {
    if (isChar(str[i]) || str[i] === '\n') {
      buf.push(str.codePointAt(i));
    }

    if (buf.length >= 30) {
      sendSeqBuf(buf, channel);
      buf = [];
      await sleep(200);
    }
  }

  if (buf.length) {
    sendSeqBuf(buf, channel);
  }

}
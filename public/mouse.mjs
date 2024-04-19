
const CH9329_FRAME_START=[87,171];
const CH9329_ADDR=0
const CH9329_SEND_MS_REL_DATA=5
// Middle,Right,Left
let   funMouseBit=[0,0,0];

function sMove(n) { //鼠标移动
  let n1=0;
  if(n==0){
    return 0;
  }
  if(n<0){
    if (n < -127) { //如果向左移动幅度大于127
      return 128; //向左移动幅度最大
    }
    n1=255+n;
  }
  if(n>0){
    if (n > 127) { //如果向右移动幅度大于127
      return 127; //向右移动幅度最大
    }
    n1=n;
  }
  return n1;
}
function sMove1(n) { //滚轮滑动
  //data为负，向下滑动120 正则反之
  let n1=0;
  if(n>0){
    if (n > 127) { //如果向上移动幅度大于127
      return 127; //向上移动幅度最大
    }
    n1=n;
  }
  if(n<0){
    if (n < -127) { //如果向下移动幅度大于127
      return 129; //向下移动幅度最大
    }
    n1=255+n;
  }
  return n1;
}
function addSum(arrayList,len){
  let sum = 0;
  for(let i=0;i<len;i++){
    sum = sum +arrayList[i];
  }
  let result = sum & 0xff;
  return result
}
function mouseBit2Payload(){
  return (funMouseBit[0]<<2)|(funMouseBit[1]<<1)|(funMouseBit[2]);
}
export function sendEvent(channel, data, type) {

  let payload = new Array(11);
  payload.fill(0);

  payload[0] = CH9329_FRAME_START[0];
  payload[1] = CH9329_FRAME_START[1];
  payload[2] = CH9329_ADDR;
  payload[3] = CH9329_SEND_MS_REL_DATA;
  payload[4] = 5;
  payload[5] = 1;
  if (type === 'move') {
    //data[0]向左负向右正
    //data[1]向上负向下正
    console.log("鼠标移动",data)
    payload[7] = sMove(Math.round(data[0] / 1.5));
    payload[8] = sMove(Math.round(data[1] / 1.5));
  } else if (type === 'mousedown') {
    switch (data) {
      case 0:
        console.log("按下左键",data)
        funMouseBit[2]=1;
        break;
      case 1:
        console.log("按下中键",data)
        funMouseBit[0]=1;
        break;
      case 2:
        console.log("按下右键",data)
        funMouseBit[1]=1;
        break;
      default:
        return;
    }
  } else if (type === 'mouseup') {
    switch (data) {
      case 0:
        console.log("释放左键",data)
        funMouseBit[2]=0;
        break;
      case 1:
        console.log("释放中键",data)
        funMouseBit[0]=0;
        break;
      case 2:
        console.log("释放右键",data)
        funMouseBit[1]=0;
        break;
      default:
        return;
    }
  } else if(type === 'wheel') {
    console.log("滚轮滑动",data)
    //data为负，向下滑动120 正则反之
    payload[9] = sMove1(data);
  } else if(type === 'reset') {
    console.log("重置")
    funMouseBit=[0,0,0]
  } else {
    return;
  }
  payload[6]  = mouseBit2Payload();
  payload[10] = addSum(payload,10);
  console.log(payload);
  const msg = {
    type: 'write_serial',
    payload,
  };

  channel.send(JSON.stringify(msg));
}
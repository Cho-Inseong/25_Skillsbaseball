async function Visitors_json() { //async/await을 사용한 이유: fetch함수는 비동기함수이기 때문에 await을 사용해 fetch가 완료될 때까지 기다리고 fetchData에 저장
    const fetchData =  await fetch("./선수제공파일/B_Module/visitors.json");
    const visitData = await fetchData.json(); //await을 이용해json변환이 완료될 떄까지 기라기게함
    return visitData["data"] //visitors.json을 visiData변수에 담음 
};

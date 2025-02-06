async function Visitors_json() { //async/await을 사용한 이유: fetch함수는 비동기함수이기 때문에 await을 사용해 fetch가 완료될 때까지 기다리고 fetchData에 저장
    const fetchData =  await fetch("./선수제공파일/B_Module/visitors.json");
    const visitData = await fetchData.json(); //await을 이용해json변환이 완료될 떄까지 기라기게함
    return visitData["data"] //visitors.json을 visiData변수에 담음 
};

async function Fill_In_Select() {
    const Visitors_Data = await Visitors_json() //visitors.json파일을 사용할 수 있게 만든 Visitors_json함수를 호출해서 사용
    
    Visitors_Data.forEach((league) => { //json데이터의 배열을 순회하면서 league값들을 leagueSelect의 option으로 추가가
        $("#leagueSelect").append(new Option(league.name, league.name));
        //$("#")은 제이쿼리의 html 요소를 가져오는 함수
        //new Option(텍스트값, value값값)
    });

    const days = ["월", "화", "수", "목", "금", "토", "일"]; //days라는 리스트를 만들어 위와 같이 사용
    days.forEach((day) => {
        $("#daySelect").append(new Option(day, day));
    })

    

}
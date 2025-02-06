async function Visitors_json() { //async/await을 사용한 이유: fetch함수는 비동기함수이기 때문에 await을 사용해 fetch가 완료될 때까지 기다리고 fetchData에 저장
    const fetch_Data = await fetch("./선수제공파일/B_Module/visitors.json");
    const visit_Data = await fetch_Data.json(); //await을 이용해json변환이 완료될 떄까지 기라기게함
    return visit_Data["data"] //visitors.json을 visiData변수에 담음 
};

async function Fill_In_Select() { //셀렉터들에 option을 넣는 함수수
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


    $("#leagueSelect, #daySelect, #optionSelect").change( //change()함수: 선택한 html요소들의 값이 변결될 때마다 실행할 함수를 지정정
        function () {
            const league_Selected = $("#leagueSelect").val(); //val()함수: vlaue값을 가져오거나 설정할 수 있는 메소드드
            const day_Selected = $("#daySelect").val();
            const option_Selected = $("#optionSelect").val();
            updateChartAndTable( //요소들이 변경되면 이 함수 실행
                Visitors_Data,
                league_Selected,
                day_Selected,
                option_Selected
            )
        }
    )
    .change(); //페이지 로드시 한번 실행시켜 초기상태에서 updateChartAndTable함수가 실행되게함
};

function updateChartAndTable(Visitors_Data, league_Name, day, option_Select) {
    const league = Visitors_Data.find((l) => l.name === league_Name) //find()함수로 Visitors_Data함수에 담긴 json파일에 리그 이름중에서 함수 파라미터로 받은 이름과 일치하는 첫 번째 요소를 반환환
    //find()함수: 첫 번째로 조건을 만족하는 요소를 반환 (json데이터의 키값은 "."으로 가져올 수 있음)(화살표 함수의 파라미터 l은 Visitors_Data를 받는다. )
    //===: 형 변환 없이 값과 타입이 정확히 일치해야함
    const day_Data = league.visitors.find((d) => d.day === day); //위 함수에 저장된 리그의 이름의 요일을 찾는 함수(json파일 참고 (리그이름>visitors>day,visitor))
    const visitor_Data = day_Data.visitor;

    $("#visitorTable").empty();//empty()함수: html요소의 내용을 비우는 함수
    $("#visitorTable").append( //append()함수: html요소의 내용을 채우는 함수수
        `<thead><tr><th>시간대</th><th>방문자 수</th></tr></thead>`
    );
    
};

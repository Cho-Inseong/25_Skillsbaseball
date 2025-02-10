async function Visitors_json() { //async/await을 사용한 이유: fetch함수는 비동기함수이기 때문에 await을 사용해 fetch가 완료될 때까지 기다리고 fetchData에 저장
    const fetch_Data = await fetch("../선수제공파일/B_Module/visitors.json");
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

    $("#visitorTable").empty();//empty()함수: html요소의 내용을 비우는 함수(비우는 이유: 혹시라도 이전에 업데이트된 차트가 남아있으면 html이 꼬이기 때문에 삭제를 하고 추가를 한다다
    $("#visitorTable").append( //append()함수: html요소의 내용을 채우는 함수수
        `<thead><tr><th>시간대</th><th>방문자 수</th></tr></thead>`
    );

    const tbody = $("<tbody></tbody>"); //제이쿼리를 사용하여 새로운 html요소를 생성(이 함수를 Dom에 추가하려면 append()를 사용해야함함)
    for (const [time, count] of Object.entries(visitor_Data)) { //Visitors_Data의 json데이터를 [키, 값]을 각각 변수에 정장해 tbody에 추가하는 코드드
        //const로 time변수와 count변수 선언
        //for...of 문으로 json배열 순회(for...of문은 배열, 문자열 객체를 순회하는 반복문 {}괄호를 사용하는 배열은 원래는 불가능하지만 Object.entries()을 사용하면 가능)(for (const 변수 of 반복할_대상) {반복할 코드})
        tbody.append(`<tr><td>${time}</td><td>${count}</td></tr>`);//`:백틱, 백틱안에서는 자바스크립트의 변수가 사용가능함
    };
    $("#visitorTable").append(tbody)//tr이 추가된 tbody를 visitorTable요소에 추가
    
    $("#chart_area").empty(); //차트부분 html요소 비우기기
    if(option_Select === "x-axis") {
        const chart_Container = $("<div></div>"); //div 요소 생성
        Object.entries(visitor_Data).forEach(([time, count]) => { //forEach만 사용하면 {}객체를 순회할 수 없음 그래서 Object.entries()를 사용함함
            const percentage = (count / 500) * 100; //문제중에 최대값은 500이라 되있어서 500을 기준으로 값을 정함
            const bar = $(`
                <div style="margin-bottom: 10px;">
                    <div style="width: ${percentage}%; min-width: 20px; height: 20px; background-color: #007bff; color: white;">${count}</div>
                    <span>${time}</span>
                </div>
            `)
            chart_Container.append(bar); //chart_Container에 bar요소 추가하기기
        });
        $("#chart_area").css({ //css(): html요소의 css스타일을 가져오거나 변경하는 함수($(선택자).css(속성, 값); == 단일 css 속성 변경)($(선택자).css({ 속성1: 값1, 속성2: 값2, ... }); == 여러 개의 css 속성 변경경)
            display: "block",
        });
        $("#chart_area").append(chart_Container);
    } else {
        const chart_Container = $(
            "<div style='height: 200px; display: flex;   '></div>"
          );
        Object.entries(visitor_Data).forEach(([time, count]) => {
            const barHeight = (count / 500) * 200;
            const bar = $(`
                <div style="margin-right: 10px;">
                    <div class="bar" style="width: 50px; height: ${barHeight}px; background-color: #007bff; color: white; display: flex; align-items: flex-end; justify-content: center;">${count}</div>
                    <span>${time}</span>
                </div>
            `);
            chart_Container.append(bar);
        })
        $("#chart_area").css({
            "display": "flex",
            "justify-content": "center",
            "text-align": "center",
        });
        $("#chart_area").append(chart_Container);
    };
};

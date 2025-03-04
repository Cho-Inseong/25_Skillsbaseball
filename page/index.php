<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skillsbaseball</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body>
    <?php include("./component/header.php") ?>

    <main id="container">
        <!-- 슬라이더 시작 -->
        <div class="slider">
            <div id="carousel">
                <img src="./img/slide1.png" alt="">
                <img src="./img/slide2.png" alt="">
                <img src="./img/slide3.png" alt="">
                <img src="./img/slide4.png" alt="">
            </div>
        </div>
        <!-- information 시작 -->
        <div id="information_area">
            <img src="./선수제공파일/images/02.jpg" alt="">
            <span>
                Skills baseball park는 시민들의 복리증진을 위하여 설치되었으며,<br>
                시민들의 건강 및 복지향상과 시민들에게 편리한 시설물 이용을 위한 야구장입니다.<br>

                야구를 사랑하며 즐기는 생활체육인들이 모이는 곳<br>
                다양한 즐거움과 감동을 선사하는 곳<br>

                Skills baseball park <a href="./page/sub01.html">information 바로가기</a>
            </span>
        </div>
        <!-- game_schedule 시작 -->
        <table id="game_schedule">
            <tr>
                <th colspan="7">2025년 4월</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
            </tr>
            <tr>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
            </tr>
            <tr>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
            </tr>
            <tr>
                <th><a href="#modal">20</a></th>
                <th>21</th>
                <th>22</th>
                <th>23</th>
                <th>24</th>
                <th>25</th>
                <th>26</th>
            </tr>
            <tr>
                <th>27</th>
                <th>28</th>
                <th>29</th>
                <th>30</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </table>
        <!-- 금일 게임 현황 시작 -->
        <div class="today_game">
            <ul>
                <li>
                    <img src="./img/team_web.png" alt="">
                </li>
                <li class="game_score" title="five">5</li>
            </ul>
            <ul class="game_date">
                <li>2025년 1월25일</li>
            </ul>
            <ul>
                <li class="game_score" title="four">4</li>
                <li><img src="./img/team_design.png" alt=""></li>
            </ul>
        </div>
        <!-- ranking 영역 시작 -->
        <!-- <div class="ranking_area">
            <div>
                <a href="#" class="ranking_a">나이트리그</a>
                <ul>
                    <li>투수순위</li>
                    <li>타자순위</li>
                </ul>
            </div>
            <a href="#" class="ranking_a">주말리그</a>
            <a href="#" class="ranking_a">새벽리그</a>
        </div> -->
        <!-- top5 영역 시작 -->
        <div class="accordion-container">
            <div class="accordion">
                <input type="checkbox" id="accordion1">
                <label class="accordion-label" for="accordion1">타율</label>
                <div class="accordion-content">
                    (1위) 일타율, (2위) 이타율, (3위) 삼타율, (4위) 사타율, (5위) 오타율
                </div>
            </div>
            
            <div class="accordion">
                <input type="checkbox" id="accordion2">
                <label class="accordion-label" for="accordion2">홈런</label>
                <div class="accordion-content">
                    (1위) 일홈런, (2위) 이홈런, (3위) 삼홈런, (4위) 사홈런, (5위) 오홈런
                </div>
            </div>
            
            <div class="accordion">
                <input type="checkbox" id="accordion3">
                <label class="accordion-label" for="accordion3">다승</label>
                <div class="accordion-content">
                    (1위) 일다승, (2위) 이다승, (3위) 삼다승, (4위) 사다승, (5위) 오다승
                </div>
            </div>
            
            <div class="accordion">
                <input type="checkbox" id="accordion4">
                <label class="accordion-label" for="accordion4">평균자책</label>
                <div class="accordion-content">
                    (1위) 일평자, (2위) 이평자, (3위) 삼평자, (4위) 사평자, (5위) 오평자
                </div>
            </div>
            
            <div class="accordion">
                <input type="checkbox" id="accordion5">
                <label class="accordion-label" for="accordion5">탈삼진</label>
                <div class="accordion-content">
                    (1위) 일삼진, (2위) 이삼진, (3위) 삼삼진, (4위) 사삼진, (5위) 오삼진
                </div>
            </div>
            
            <div class="accordion">
                <input type="checkbox" id="accordion6">
                <label class="accordion-label" for="accordion6">세이브</label>
                <div class="accordion-content">
                    (1위) 일세이, (2위) 이세이, (3위) 삼세이, (4위) 사세이, (5위) 오세이
                </div>
            </div>
        </div>
        <!-- 갤러리 영역 시작 -->
        
        <!-- 굿즈 영역 시작 -->
        <div class="goods_area">
            <img class="goods_imp" src="./선수제공파일/images/28.jpg" alt="">
            <img src="./선수제공파일/images/24.jpg" alt="">
            <img src="./선수제공파일/images/26.jpg" alt="">
            <img src="./선수제공파일/images/34.jpg" alt="">
        </div>
    </main>
    <?php include("./component/footer.php") ?>
    <!-- 모달 시작 -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <h1>2025년 4월 20일</h1>
            <img src="./img/pic.png" alt="">
            <a href="#"><span>닫기</span></a>
        </div>
    </div>
</body>

</html>
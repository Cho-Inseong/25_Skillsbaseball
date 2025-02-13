<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sub02</title>
    <link rel="stylesheet" href="../선수제공파일/bootstrap-5.2.0-dist/css/bootstrap.css">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <?php include("../component/header.php") ?>
    
    <main id="container">
        <div class="visitors">
            <div class="selecter">
                <select id="leagueSelect">
                    <!-- 자바스크립트 -->
                </select>
                <select id="daySelect">
                    <!-- 자바스크립트 -->
                </select>
                <select id="optionSelect">
                    <option value="y-axis">세로로 보기</option>
                    <option value="x-axis">가로로 보기</option>
                </select>
            </div>
            <div id="chart_area">
                <!-- 자바스크립트 -->
            </div>
            <table id="visitorTable">
                <!-- 자바스크립트 -->
            </table>
        </div>
    </main>

    <?php include("../component/footer.php") ?>

    <script src="../script.js"></script>
    <script src="../선수제공파일/jquery-3.7.1.min.js"></script>
    <script src="../선수제공파일/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
    <script src="../선수제공파일/bootstrap-5.2.0-dist/js/bootstrap.js"></script>
    <script>
        $(document).ready(() => {//page가 실행될때 함수도 실행시키게함
            Fill_In_Select();
        }
    )
    </script>
</body>
</html>
loadQuiz()

let quizData;

function loadQuiz() {
    fetch('/quiz/data/listofquiz.json')
        .then((response) => response.json())
        .then((data) => {
            quizData = data
            runLoader()
        })
}

function runLoader() {
    console.log("Quiz data loaded. Searching... ")
    let url = new URL(window.location.href)
    let urlParam = url.searchParams
    let quizID = urlParam.get('id')
    console.log("Requested quiz is: ", quizID)
    if (quizID == null) {
        getId('quizViewer').innerHTML = `
        <h1>잘못된 접근 경로</h1>
        <p>이 사이트를 메인페이지를 거치지 않고 접속한것으로 추정됩니다. 메인페이지를 통해 접속해주세요!</p>
        <a href="/" class="btn btn-primary btn-lg">메인 페이지로 &raquo;</a>`
    } else {
        quizData.forEach(element => {
            if (element.id == quizID) {
                //Load the  quiz
                loadQuiz(element)
            }
        });
    }
}

function loadQuiz(quizDataElement) {
    //Fetch the quizdata
    fetch(quizDataElement.ref)
        .then((response) => response.json())
        .then((data) => {
            readAndDisplay(data)
        })
}

function readAndDisplay(data) {
    
}

function getId(id) {
    return document.getElementById(id)
}
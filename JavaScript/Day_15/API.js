const url = 'https://localhost:7040/Session/GetAllSessions'
const url2 = 'https://localhost:7040/Test/AddSessionTest'

async function getData() {

        let res = await fetch(url);
        console.log(res);

        let data = await res.json();
        console.log(data);

        if (res.status == 200) {
            console.log("Data get successfully");
        }
}

// fetch(url).then((res) =>
//     console.log(res.json()
//     )).catch((err) =>
//         console.log(err)
//     );

async function setdata() {

    const data =
    {
        "testId": 0,
        "sessionId": 1,
        "totalMarks": 5,
        "trainees": [
            1007
        ],
        "questions": [
            {
                "questionId": 0,
                "testId": 0,
                "userId": 0,
                "question": "Demo POST",
                "actualAns": "Demo Ans",
                "marks": 5
            }
        ]
    }

    let res = await fetch(url2, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    console.log(res);
}
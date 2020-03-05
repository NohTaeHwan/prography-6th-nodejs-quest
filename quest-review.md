# 개발후기 


## 1.개요
node.js 를 이용한 '할일 CRUD RESTful 서버' 만들기 

<br>


## 2. 개발환경
- node v12.11.1
- DB : mysql v8.0.16
- ORM : sequelize

<br>

## 3. 구현 api
1. 할일 등록: POST /todos
2. 할일 목록: GET /todos
3. 할일 읽기: GET /todos/:todoId
4. 할일 수정: PUT /todos/:todoId
5. 할일 완료: PUT /todos/:todoId/complete
6. 할일 삭제: DELETE /todos/:todoId
7. 할일에 댓글 등록: POST /todos/:todoId/comments
8. 할일의 댓글 목록: GET /todos/:todoId/comments
9. 할일의 댓글 읽기: GET /todos/:todoId/comments/:commentId
10. 할일의 댓글 수정: PUT /todos/:todoId/comments/:commentId
11. 할일의 댓글 삭제: DELETE /todos/:todoId/comments/:commentId
<br>

## 4. 후기
과제에 주어진 restful 서버를 만드는 것에 성공했습니다. 다소 생소한 node js를 이용하여 짧은 기간내에 서버를 만들어야 했기에 어려운 부분도 있었으나 배운점이 굉장히 많았습니다. 생활코딩과 인터넷 검색을 통해 방법을 익히며 만든 서버이다 보니 부족한 점이 매우 많습니다. 개발과정에서도 많이 버벅거렸습니다. 특히 CRUD 중에서 update를 개발하는 과정에서 많은 시간이 걸렸으며 진땀 흘렸습니다. node js의 어플리케이션 동작 흐름, 구문 등에 대해 많이 배운 계기가 되었습니다. 후기를 작성하는 지금은 아쉽게도 추가 가산점 과제는 해결하지 못한 상태이나 제출 기한이 지나더라도 끝까지 완성시켜 봐야할 것 같습니다. node js 상당히 재밌는것 같습니다. 더 공부해야겠다는 생각을 하며 후기 마칩니다. 

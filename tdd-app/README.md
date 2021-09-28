# TDD

### Node.js 기본 구조 코드 작성(`package.json`)

1.  `package.json` 파일 작성
2.  사용할 모듈 추가

#### `package.json` 파일 작성

프로젝트 정보와 프로젝트에서 사용 중인 패키지의 의존성을 관리하는 곳

>   `npm init`

#### 사용할 모듈 추가

-   `Express` : Node.js의 API를 단순화하고 유용한 기능들은 더 추가시켜
    Node.js를 더 편리하고 유용하게 사용할 수 있게 해주는 모듈
-   `Mongoose` : MongoDB를 편리하게 사용하게 해주는 노드의 확장 모듈
-   `Jest` : 단위 테스트
-   `node-mocks-http` : 단위 테스트
-   `supertest` : 통합 테스트

```
npm install express mongoose --save
npm install jest node-mocks-http supertest --save-dev
```

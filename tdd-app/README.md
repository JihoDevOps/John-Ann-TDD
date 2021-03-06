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

### 단위 테스트

#### 정의

단위 테스트는 개발자가 수행하고 자신이 개발한 코드 단위(모듈, 구성 요소)를
테스트합니다. 소스코드의 개별 단위를 테스트하여 사용할 준비가 되었는지
확인하는 테스트 방법입니다. 개발 라이프 사이클의 초기 단계에서 버그가
식별되므로 버그 수정 비용을 줄이는 데 도움이 됩니다. 간단하게 생각하면
메소드를 테스트하는 또 다른 메소드라고 생각하시면 됩니다.

#### 조건

1.  독립적이어야 하며, 어떤 테스트도 다른 테스트에 의존하지 않아야 한다.
2.  격리되어야 한다. Ajax, Axios, LocalStorage 등 테스트 대상이 의존하는
    것을 다른 것으로 대체한다.

#### 이유

1.  첫번째는 프로그램이 크고, 메모리가 많이 들고, 다른 리소스(DB 등)가
    필요한 경우 로컬 환경에서 쉽게 코드를 실행시켜보기 어렵기 때문이다.
    이런 프로그램을 개발하는 개발자들은 유닛테스트를 만들어서 빠르게
    자신의 코드가 정상적으로 동작하는지 확인할 수 있다.
2.  종속성이 있는 다른 클래스들에서 버그가 나는 것을 방지한다.

---

### Create - default

#### Work Flow

1.  TODO
2.  Unit Test Script
3.  Test Driven Development

#### 1. TODO

먼저 할 일은 DB에 Product를 저장하는 것입니다.
그 중에서 Product를 저장하기 위한 함수를 먼저 생성합니다.

#### 2. Unit Test Script

```bash
test/unit/product.test.js
```

```js
describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
});
```

#### 3. Test Driven Development

```bash
controller/product.js
```

```js
exports.createProduct = () => {};
```

### Create - Method

#### 1. TODO

`createProduct` 함수를 호출할 때
`Product Model`의 `Create` 메소드가 호출되는지 확인한다.

#### 2. Unit Test

```js
it("should call Product.create", () => {
  productController.createProduct();
  expect(productModel.create).toBeCalledWith();
});
```

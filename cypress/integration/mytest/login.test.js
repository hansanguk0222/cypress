/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
describe("화면 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("버튼과 로그인 input, 비밀번호 input이 잘 나오는지 확인", () => {
    cy.get(".joinForm > label").should("be.visible");
    cy.get(".joinForm > label").eq(0).should("contain.text", "이메일");
    cy.get(".joinForm > label").eq(1).should("contain.text", "비밀번호");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="pw"]').should("be.visible");
    cy.get("button").should("be.visible");
    cy.get("button").should("contain.text", "제출");
  });
});

describe("UI 조작 테스트", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("로그인 기능 테스트", () => {
    cy.get('input[name="email"]').type("abc");
    cy.get('input[name="pw"]').type("123");
    cy.get("button")
      .click()
      .then(() => {
        cy.get(".welcomeBox").should("contain.text", "환영합니다.");
      });
  });
});

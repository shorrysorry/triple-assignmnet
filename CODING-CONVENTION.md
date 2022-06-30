# 코딩 컨벤션

## 📌스타일

- standard ESLint 추천 규칙
- standard에서 제공하지 않은 추가적인 추천 규칙
- 참고 : [
  eslint-config-triple STYLE_GUIDE](https://github.com/titicacadev/eslint-config)

## 📌네이밍

### 1. 변수

- 표기법 : 카멜케이스 사용(camelCase)

- 되도록 명사 (Boolean의 경우만 is로 시작)

### 2. 함수

- 표기법 : 카멜케이스 사용(camelCase)

- 함수의 기능을 알 수 있도록 동사(add, remove, select, get, handle 등)로 시작

- 축약어 사용 : Button → Btn, Picture ⇒ Pic, Image ⇒ Img

### 3. 컴포넌트

- ( atomic-deisgn pattern을 기반으로 하되, 1개의 페이지만 구현을 하는 프로젝트이므로, TEMPLATES는 생략한다. )

- 표기법 : 파스칼케이스(PascalCase) 사용

#### 3-1. ATOMS

> - 최소한의 1개의 기능을 하는 단위
> - '컴포넌트의 기능'을 이름으로 한다.

#### 3-2. MOLECULES

> - 하나의 컴포넌츠에서 2개 이상의 기능을 하는 단위
> - 혹은 하나의 기능 + UI 표현을 위한 텍스트 등
> - '컴포넌트의 기능' 혹은 'UI적 요소 정의'를 이름으로 한다.

#### 3-3. ORGANISMS

> - 하나의 완성된 기능으로서 작동하기 위한 여러 기능 단위들의 합
> - '완성된 기능 혹은 완성된 부분의 명칭 + section'을 이름으로 한다.

#### 3-4. PAGES

> - '해당 페이지의 이름'을 컴포넌트의 이름으로 한다.

### 4. 디렉토리

- 표기법 : 카멜케이스 사용(camelCase)
- 복수형

#### 4-1. 디렉토리 구조

- assets
  - 이미지 파일이나 폰트 파일 등
- components
  - page제외 atomic-design pattern의 구성요소
- pages
  - atomic-design pattern의 페이지 단위
- styles
  - global-style , theme

## 📌컴포넌트

### 1. CODE 순서

```JSX
// INTERFACE
// FUNCTION
// STYLED-COMPONENT
// COMPONENT
```

### 2. CSS 표기 순서

1. Layout Properties (1. display 2. position 3. float 4.clear)

2. Box Model Properties (1.width 2.height 3.margin 4.padding 5.box-sizing)

3. Visual Properties (1. border 2. background 3.box-shadow )

4. Typography Properties (1. color 2. font-family 3.font-size 4.font-weight 5. line-height 6.text-align 7.text-transform)

5. Misc Properties (1. cursor 2. overflow 3. z-index)

6. animations (transform, transition)

### 3. PORPS 표기 순서

#### 1. basic props

1. id

2. key

3. class

#### 2. style props

- css 속성 표기 순서에 따름

#### 3. event props

1. 기본적인 events (onClick, onChange 등)

2. 커스텀 events

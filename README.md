# R3F Motion Container

React Three Fiber와 Three.js를 학습하는 과정에서 만든 3D 모델 뷰어 컴포넌트입니다. 

Sketchfab의 무료 3D 모델을 활용하여 R3F의 기본적인 기능들을 구현해보았습니다.

<br/>

## 프로젝트 개요📝
이 프로젝트는 다음 기능들의 구현 연습을 목적으로 합니다:
- GLB/GLTF 모델 로딩
- 모델의 자동 회전 애니메이션
- OrbitControls를 통한 카메라 조작
- 재생/정지 컨트롤 구현

<br/>

## 데모 영상📽️
![Dec-16-2024 17-37-58](https://github.com/user-attachments/assets/03a1054f-c71f-4787-ba76-fbf8b8a353ef)

<br/>


## 조작 방법🎮
- 마우스 드래그: 모델을 360도 방향으로 회전 가능
- 스크롤: 모델 확대/축소
- ▶/❚❚ 버튼: 자동회전 켜기/끄기

<br/>

## 겪은 이슈와 해결 과정⚒️

### 초기 에러
React Three Fiber를 구현하는 과정에서 다음과 같은 TypeScript 에러 발생
```typescript
Property 'mesh' does not exist on type 'JSX.IntrinsicElements'
```

### 시도한 해결 방법들
1. 타입 선언 추가:
```typescript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: ThreeElements["mesh"]
    }
  }
}
```

2. tsconfig.json 설정:
```json
{
  "compilerOptions": {
    "types": ["@react-three/fiber"]
  }
}
```

3. 타입 명시적 import:
```typescript
import { Canvas, useFrame, extend, type ThreeElements } from "@react-three/fiber";
```

### 최종 해결 방법
React 19 버전과 R3F의 호환성 문제로 인한 것으로 확인 및 의존성 다운그레이드로 해결

```json
{
  "dependencies": {
    "@react-spring/three": "^9.7.5",
    "@react-three/drei": "9.92.7",
    "@react-three/fiber": "8.15.12",
    "next": "14.2.15",
    "react": "18.2.0",
    "react-dom": "18.2.0",
  }
}
```

해당 이슈는 React Three Fiber가 아직 React 19를 완전히 지원하지 않아 발생한 것으로, React 18 버전으로 다운그레이드하여(Nextjs 버전도 같이 다운그레이드) TypeScript 에러를 해결하고 R3F 컴포넌트가 정상적으로 작동하도록 했습니다.


---

<br/>

코멘트와 피드백은 언제나 환영입니다! 

<choyejee14@gmail.com>


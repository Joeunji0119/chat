
## Chatting Desktop App 🍒 CherryChat 🍒
<br/>
<br/>
<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBMmNY%2FbtrYG63sgK6%2FjXLKpvmgTxKlSQaUyMPFb0%2Fimg.png" width="500" alt="no-img">
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fv0WU5%2FbtrYI95TWwR%2FiSI6B4kdhb11WgP0RNgy21%2Fimg.png" width="500" alt="no-img">
</p>

<br/>
<br/>

## 🏃‍ 실행 방법
<br/>

```
🖥 mac 환경에서 제작하였습니다

$ npm i
$ npm run dev

npm i 이후 npm run dev 실행
```

<br/>
<br/>


## ⚒️ Stack ⚒️ 
</br>


<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=Electron&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/emotionJs-12BD4?style=for-the-badge&logoColor=white"> <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">

</br><br/>



## ✔️ 구현 목록 & 구현 영상

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblHY8S%2FbtrYIUBfe2G%2FekBTfw6HVyqGDW2FPoyEVk%2Fimg.gif" width="500px"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZ1rfD%2FbtrYIvVZ3qt%2FNggKYHAg12uApoLkStzXR1%2Fimg.gif" width="500px">



- [x] 회원가입, 로그인 구현
- [x] 1:1 채팅 구현
- [x] 단체 채팅 구현
- [x] 서버리스 서비스 구현 

</br><br/>

## ☝️ 로직

<br/>

### Context API 전역 상태 관리 

```javascript
 <UserCurrentContext.Provider
     value={{
        currentUser,
        setCurrentUser,
        chatListData,
        setChatListData,
        userList,
        setUserList,
        chatList,
        teamChatListData,
        setTeamChatListData,
        teamChatList,
        }}>
     <ClickedUserContext.Provider
         value={{
            clickedUserUid,
            setClickedUserUid,
            chatUid,
            }}>
            {children}
      </ClickedUserContext.Provider>
 </UserCurrentContext.Provider>
```

props drilling 을 막고 props를 자유롭게 사용하기 위해 `context Api`를 사용하였습니다.
`UserCurrentContext` 에 로그인 되어 있는 유저의 정보와 채팅 리스트를 모았고 `ClickedUserContext` 에 채팅 정보를 불러오기 위해 필요한 uid 상태를 모아 관심사에 맞게 분리하도록 구현하였습니다.


</br><br/>


### Ant-design Sider 사용 

<br/>

```javascript

// .../sider/menu/ChatList.tsx

 const chatListMenu = [
   getMenu(
    '개인 채팅',
    'userChats',
    <TeamOutlined />,
   convertListData(chatList)
  ),
 ];

return (
   <Menu
      mode='inline'
      css={MenuLayout}
      items={chatListMenu}
      onClick={uid => handleSelectChat(uid)}
   />
 );
 
 
 // .../constants/menuDataConvert.ts
 
 ...
 
 export function convertListData(data?: userListProps[]) {
   const list = data?.map(({ displayName, uid }) => {
     return { label: displayName, key: uid };
     });
  return list;
 }

```

유저 목록과 채팅 목록을 불러오는 Sider 컴포넌트에 `ant-design` 를 사용하여 구현하였습니다. 서버에서 받아오는 데이터 형식을 `convertListData()` 함수로 Sider에 알맞은 형식으로 만들어 사용했습니다. 총 받아오는 목록이 유저 목록, 개인 채팅 목록, 단체 채팅 목록으로 총 3개의 메뉴였기 때문에 한 메뉴씩 컴포넌트를 분리해 Sider 폴더에서 바로 찾을 수 있게끔 나누었습니다.


</br><br/>


### firebase 사용









</br><br/>

## 폴더 구조




```
📦renderer
 ┣ 📂.next
 ┃ 
 ┣ 📂api
 ┃ ┣ 📜getChatInfo.ts
 ┃ ┗ 📜getUserInfo.ts
 ┃
 ┣ 📂components
 ┃ ┣ 📂Chat
 ┃ ┃ ┣ 📂chattingUserInfo
 ┃ ┃ ┃ ┗ 📜ChattingUserInfo.tsx
 ┃ ┃ ┣ 📂messages
 ┃ ┃ ┃ ┣ 📜Message.tsx
 ┃ ┃ ┃ ┗ 📜MessageInput.tsx
 ┃ ┃ ┗ 📜ChatRoom.tsx
 ┃ ┃
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂authForm
 ┃ ┃ ┃ ┣ 📜SummitButton.tsx
 ┃ ┃ ┃ ┣ 📜UserEmail.tsx
 ┃ ┃ ┃ ┣ 📜UserName.tsx
 ┃ ┃ ┃ ┣ 📜UserPassword.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜SwithAuthModeButton.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┃
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜Nav.tsx
 ┃ ┃
 ┃ ┣ 📂contexts
 ┃ ┃ ┗ 📜ContextWrapper.tsx
 ┃ ┃
 ┃ ┣ 📂sider
 ┃ ┃ ┣ 📂menu
 ┃ ┃ ┃ ┣ 📜ChatList.tsx
 ┃ ┃ ┃ ┣ 📜TeamChatList.tsx
 ┃ ┃ ┃ ┗ 📜UserList.tsx
 ┃ ┃ ┃ 
 ┃ ┃ ┣ 📜Sider.tsx
 ┃ ┃ ┣ 📜TeamChatButton.tsx
 ┃ ┃ ┗ 📜TeamChatModal.tsx
 ┃ ┃
 ┃ ┣ 📜HomeGuideContainer.tsx
 ┃ ┗ 📜LayoutContainer.tsx
 ┃
 ┣ 📂constants
 ┃ ┣ 📜chatDataConvert.ts
 ┃ ┣ 📜menuDataConvert.ts
 ┃ ┗ 📜types.ts
 ┃
 ┣ 📂pages
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜auth.tsx
 ┃ ┗ 📜home.tsx
 ┃
 ┣ 📂shared
 ┃ ┗ 📜variableStyle.ts
 ┃
 ┣ 📂styles
 ┃ ┣ 📜globalStyle.ts
 ┃ ┗ 📜theme.ts
 ┃
 ┗ 📜firebase.tsx


```







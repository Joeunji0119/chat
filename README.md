
## Chatting Desktop App π CherryChat π
<br/>
<br/>
<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBMmNY%2FbtrYG63sgK6%2FjXLKpvmgTxKlSQaUyMPFb0%2Fimg.png" width="500" alt="no-img">
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fv0WU5%2FbtrYI95TWwR%2FiSI6B4kdhb11WgP0RNgy21%2Fimg.png" width="500" alt="no-img">
</p>

<br/>
<br/>

## πβ μ€ν λ°©λ²
<br/>

```
π₯ mac νκ²½μμ μ μνμμ΅λλ€

$ npm i
$ npm run dev

npm i μ΄ν npm run dev μ€ν
```

<br/>
<br/>

```
π₯ Test Id

id : test@gmail.com
pw : asdf1234

```


## βοΈ Stack βοΈ 
</br>


<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=Electron&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/emotionJs-12BD4?style=for-the-badge&logoColor=white"> <img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white">
<br/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">

</br><br/>



## βοΈ κ΅¬ν λͺ©λ‘ & κ΅¬ν μμ

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblHY8S%2FbtrYIUBfe2G%2FekBTfw6HVyqGDW2FPoyEVk%2Fimg.gif" width="500px"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZ1rfD%2FbtrYIvVZ3qt%2FNggKYHAg12uApoLkStzXR1%2Fimg.gif" width="500px">



- [x] νμκ°μ, λ‘κ·ΈμΈ κ΅¬ν
- [x] 1:1 μ±ν κ΅¬ν
- [x] λ¨μ²΄ μ±ν κ΅¬ν
- [x] μλ²λ¦¬μ€ μλΉμ€ κ΅¬ν 

</br><br/>

## βοΈ λ‘μ§

<br/>

### Context API μ μ­ μν κ΄λ¦¬ 

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

props drilling μ λ§κ³  propsλ₯Ό μμ λ‘­κ² μ¬μ©νκΈ° μν΄ `context Api`λ₯Ό μ¬μ©νμμ΅λλ€.
`UserCurrentContext` μ λ‘κ·ΈμΈ λμ΄ μλ μ μ μ μ λ³΄μ μ±ν λ¦¬μ€νΈλ₯Ό λͺ¨μκ³  `ClickedUserContext` μ μ±ν μ λ³΄λ₯Ό λΆλ¬μ€κΈ° μν΄ νμν uid μνλ₯Ό λͺ¨μ κ΄μ¬μ¬μ λ§κ² λΆλ¦¬νλλ‘ κ΅¬ννμμ΅λλ€.


</br><br/>


### Ant-design Sider μ¬μ© 

<br/>

```javascript

// .../sider/menu/ChatList.tsx

 const chatListMenu = [
   getMenu(
    'κ°μΈ μ±ν',
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

μ μ  λͺ©λ‘κ³Ό μ±ν λͺ©λ‘μ λΆλ¬μ€λ Sider μ»΄ν¬λνΈμ `ant-design` λ₯Ό μ¬μ©νμ¬ κ΅¬ννμμ΅λλ€. μλ²μμ λ°μμ€λ λ°μ΄ν° νμμ `convertListData()` ν¨μλ‘ Siderμ μλ§μ νμμΌλ‘ λ§λ€μ΄ μ¬μ©νμ΅λλ€. μ΄ λ°μμ€λ λͺ©λ‘μ΄ μ μ  λͺ©λ‘, κ°μΈ μ±ν λͺ©λ‘, λ¨μ²΄ μ±ν λͺ©λ‘μΌλ‘ μ΄ 3κ°μ λ©λ΄μκΈ° λλ¬Έμ ν λ©λ΄μ© μ»΄ν¬λνΈλ₯Ό λΆλ¦¬ν΄ Sider ν΄λμμ λ°λ‘ μ°Ύμ μ μκ²λ λλμμ΅λλ€.


</br><br/>


### firebase μ¬μ©


<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdX9goR%2FbtrYKGCiuvV%2FKokeZR8kktjhuejIFI6211%2Fimg.png" width="350px">

<br/>`chats` : μ±νλ°© κ³ μ  uid λ‘ μ°κ²°, λ©μΈμ§λ₯Ό λ΄κ³  μμ΅λλ€.
<br/>`teamChats` : μ μ  uidλ‘ μ°κ²°, ν΄λΉ μ μ μ λ¨μ²΄ μ±νλ°©μ λ΄κ³  μμ΅λλ€.
<br/>`userChats`: μ μ  uidλ‘ μ°κ²°, ν΄λΉ μ μ μ κ°μΈ μ±νλ°©μ λ΄κ³  μμ΅λλ€.
<br/>`user` : ν΄λΉ μ μ μ μ λ³΄ (μ΄λ¦, μ΄λ©μΌ, uid)λ₯Ό λ΄κ³  μμ΅λλ€.


</br><br/>


### λ¨μ²΄ μ±νλ°© κ΅¬ν


```javascript

const teamUid = v1();
await setDoc(doc(db, 'chats', teamUid), {
	message: '',
});

for (let i = 0; i < checkedUserPlueMe.length; i++) {
	const checkedUserExceptMe = checkedUserPlueMe.filter(
		el => el !== checkedUserPlueMe[i]
	);
	for (let j = 0; j < checkedUserExceptMe.length; j++) {
		await updateDoc(doc(db, 'teamChats', checkedUserPlueMe[i]), {
			[teamUid + '.userInfo']: {
				uid: teamUid,
				displayName: teamChatName,
			},
			[teamUid + '.date']: serverTimestamp(),
		});
	}
}
   
```

λ¨μ²΄ λ°©μ λ§λ€ λ λ¨μ²΄ μ΄λ¦, μ²΄ν¬λ μ μ  `uid` λ°°μ΄κ³Ό `uuid` λΌμ΄λΈλ¬λ¦¬λ‘ ν μ±νλ°©μ κ³ μ ν `uid`λ₯Ό λ§λ€μ΄ λ°μ΄ν°λ‘ λ§λ€μ΄ μ¬μ©νμμ΅λλ€.
ν μ±νλ°©μ μ΄λλ κ°κ°μ μ μ μκ² λ¨μ²΄λ°© λ°μ΄ν°λ₯Ό λ£μ΄μΌνλλ° λ¨μ²΄ μ±νλ°© uid λΏλ§ μλλΌ μ±νμ μ°Έκ°ν μ μ λ€μ μ€ λ³ΈμΈμ μ μΈν μ μ  λ°μ΄ν°λ₯Ό λ£μ΄μΌνμ΅λλ€. μ΄λ₯Ό `filter` λ₯Ό μ¬μ©ν΄ ν΄λΉ μ μ μ `uid`λ₯Ό μ μΈν λ°°μ΄μ λ€μ λ§λ€μ΄ κ°κ° λ¨μ²΄ μ±νλ°© μ λ³΄μ μ μ  μ λ³΄λ₯Ό λ£μμ΅λλ€. 

</br><br/><br/>


## ν΄λ κ΅¬μ‘°




```
π¦renderer
 β£ π.next
 β 
 β£ πapi
 β β£ πgetChatInfo.ts
 β β πgetUserInfo.ts
 β
 β£ πcomponents
 β β£ πChat
 β β β£ πchattingUserInfo
 β β β β πChattingUserInfo.tsx
 β β β£ πmessages
 β β β β£ πMessage.tsx
 β β β β πMessageInput.tsx
 β β β πChatRoom.tsx
 β β
 β β£ πauth
 β β β£ πauthForm
 β β β β£ πSummitButton.tsx
 β β β β£ πUserEmail.tsx
 β β β β£ πUserName.tsx
 β β β β£ πUserPassword.tsx
 β β β β πindex.ts
 β β β£ πSwithAuthModeButton.tsx
 β β β πindex.ts
 β β
 β β£ πcommon
 β β β πNav.tsx
 β β
 β β£ πcontexts
 β β β πContextWrapper.tsx
 β β
 β β£ πsider
 β β β£ πmenu
 β β β β£ πChatList.tsx
 β β β β£ πTeamChatList.tsx
 β β β β πUserList.tsx
 β β β 
 β β β£ πSider.tsx
 β β β£ πTeamChatButton.tsx
 β β β πTeamChatModal.tsx
 β β
 β β£ πHomeGuideContainer.tsx
 β β πLayoutContainer.tsx
 β
 β£ πconstants
 β β£ πchatDataConvert.ts
 β β£ πmenuDataConvert.ts
 β β πtypes.ts
 β
 β£ πpages
 β β£ π_app.tsx
 β β£ π_document.tsx
 β β£ πauth.tsx
 β β πhome.tsx
 β
 β£ πshared
 β β πvariableStyle.ts
 β
 β£ πstyles
 β β£ πglobalStyle.ts
 β β πtheme.ts
 β
 β πfirebase.tsx


```







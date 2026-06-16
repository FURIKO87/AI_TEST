/* ==========================================================================
   THE BAD GUYS ENGLISH ADVENTURE - APPLICATION LOGIC (JS)
   ========================================================================== */

// 1. 학습용 마스터 데이터 (Chapter 1)
const WORDS_DATA = [
    { id: 1, english: "bad guy", korean: "나쁜 녀석 / 악당", type: "PHRASE", exEn: "We are not bad guys!", exKo: "우리는 나쁜 녀석들이 아니야!" },
    { id: 2, english: "good guy", korean: "착한 녀석 / 영웅", type: "PHRASE", exEn: "I want to be a good guy.", exKo: "나는 착한 녀석이 되고 싶어." },
    { id: 3, english: "look like", korean: "~처럼 보이다", type: "PHRASE", exEn: "You don't look like a good guy.", exKo: "너는 착한 사람처럼 보이지 않아." },
    { id: 4, english: "turn into", korean: "~로 변하다 / 되다", type: "PHRASE", exEn: "We will turn into heroes!", exKo: "우리는 영웅으로 변할 거야!" },
    { id: 5, english: "reputation", korean: "평판 / 소문", type: "VOCAB", exEn: "We have a bad reputation.", exKo: "우리는 평판이 나쁘다." },
    { id: 6, english: "terror", korean: "공포 / 두려움", type: "VOCAB", exEn: "They are screaming in terror.", exKo: "그들은 공포에 질려 비명을 지르고 있다." },
    { id: 7, english: "rescue", korean: "구조하다 / 구하다", type: "VOCAB", exEn: "We are going to rescue the kittens.", exKo: "우리는 아기 고양이들을 구조할 거야." },
    { id: 8, english: "dangerous", korean: "위험한", type: "VOCAB", exEn: "Is he a dangerous animal?", exKo: "그는 위험한 동물인가요?" },
    { id: 9, english: "give me a break", korean: "좀 봐주다 / 에이 설마", type: "PHRASE", exEn: "Oh, come on! Give me a break.", exKo: "오, 제발! 날 좀 봐줘." },
    { id: 10, english: "screaming", korean: "비명을 지르는", type: "VOCAB", exEn: "Why is everyone screaming?", exKo: "왜 다들 소리를 지르고 있니?" },
    { id: 11, english: "hero", korean: "영웅", type: "VOCAB", exEn: "He wants to be a hero.", exKo: "그는 영웅이 되고 싶어 한다." },
    { id: 12, english: "mission", korean: "임무", type: "VOCAB", exEn: "This is our first mission.", exKo: "이것이 우리의 첫 번째 임무야." },
    { id: 13, english: "shave off", korean: "깎아내다 / 면도하다", type: "PHRASE", exEn: "I will shave off my bad image.", exKo: "나의 나쁜 이미지를 깎아버리겠어." },
    { id: 14, english: "scary", korean: "무서운", type: "VOCAB", exEn: "The big bad wolf is scary.", exKo: "크고 나쁜 늑대는 무섭다." },
    { id: 15, english: "introduce", korean: "소개하다", type: "VOCAB", exEn: "Let me introduce my friends.", exKo: "내 친구들을 소개해 줄게." }
];

const PUZZLE_DATA = [
    { english: "You look like a bad guy", korean: "너는 나쁜 녀석처럼 보여.", words: ["You", "look", "like", "a", "bad", "guy"] },
    { english: "We can turn into heroes", korean: "우리는 영웅으로 변할 수 있어.", words: ["We", "can", "turn", "into", "heroes"] },
    { english: "Let me explain the mission", korean: "내가 그 임무를 설명해 줄게.", words: ["Let", "me", "explain", "the", "mission"] },
    { english: "Please give me a break", korean: "제발 나를 좀 봐줘.", words: ["Please", "give", "me", "a", "break"] },
    { english: "They are screaming in terror", korean: "그들은 공포에 질려 비명을 지르고 있다.", words: ["They", "are", "screaming", "in", "terror"] }
];

const QUIZ_DATA = [
    {
        question: '"reputation"의 올바른 한국어 뜻은 무엇일까요?',
        options: ["구조하다", "평판 / 소문", "임무", "위험한"],
        answer: 1,
        feedback: "맞았어요! Reputation은 사람들이 어떤 사람이나 사물에 대해 가지는 '평판'이나 '소문'을 뜻해요!"
    },
    {
        question: '"We want to be good guys."의 올바른 한국어 번역은?',
        options: [
            "우리는 나쁜 녀석들이 아니야.",
            "우리는 아기 고양이를 구할 거야.",
            "우리는 착한 녀석들이 되고 싶어.",
            "우리는 무서운 괴물이다."
        ],
        answer: 2,
        feedback: "정답! 'We want to be...'는 '~가 되고 싶다', 'good guys'는 '착한 녀석들'이에요."
    },
    {
        question: '빈칸에 들어갈 가장 알맞은 표현을 고르세요. "You don\'t _______ _______ a nice wolf."',
        options: ["turn into", "give break", "look like", "shave off"],
        answer: 2,
        feedback: "최고예요! 'look like'은 '~처럼 보이다'라는 표현으로, '너는 착한 늑대처럼 보이지 않아'라는 뜻이에요."
    },
    {
        question: '"rescue"의 올바른 뜻을 골라보세요.',
        options: ["면도하다", "소개하다", "도망치다", "구조하다 / 구하다"],
        answer: 3,
        feedback: "딩동댕! Rescue는 위험에 빠진 사람이나 동물을 '구조하다'라는 뜻이에요."
    },
    {
        question: '"turn into"의 뜻으로 가장 적합한 것은 무엇일까요?',
        options: ["~로 변하다 / 되다", "소리 지르다", "소개하다", "포기하다"],
        answer: 0,
        feedback: "정답입니다! Turn into는 형태나 성격이 다른 무언가로 '변하다' 혹은 '되다'를 의미해요."
    }
];

// PDF 스캐너용 내장 미니 사전 (책에 자주 나오는 80개 필수 어휘)
const MINI_DICTIONARY = {
    "wolf": "늑대 (주인공 울프)",
    "snake": "뱀 (스네이크)",
    "shark": "상어 (샤크)",
    "piranha": "피라냐 (물고기 피라냐)",
    "bad": "나쁜",
    "guys": "녀석들 / 사람들",
    "good": "착한 / 좋은",
    "grandma": "할머니 (빨간 망토 이야기)",
    "pig": "돼지 (아기 돼지 삼형제)",
    "reputation": "평판 / 소문 / 명성",
    "scary": "무서운",
    "monster": "괴물",
    "dangerous": "위험한",
    "hero": "영웅",
    "heroes": "영웅들",
    "claws": "발톱",
    "fangs": "송곳니",
    "teeth": "이빨",
    "guilty": "죄가 있는 / 유죄의",
    "innocent": "결백한 / 무죄의",
    "crying": "우는 / 비명을 지르는",
    "screaming": "비명 지르는",
    "terror": "공포 / 두려움",
    "prison": "감옥",
    "jail": "감옥",
    "escape": "탈출하다",
    "getaway": "도주 / 탈출",
    "kitten": "아기 고양이",
    "kittens": "아기 고양이들",
    "tree": "나무",
    "butt": "엉덩이",
    "rescue": "구조하다 / 구하다",
    "mission": "임무 / 미션",
    "shave": "면도하다 / 깎아내다",
    "reprehensible": "비난받을 만한 (어려운 단어!)",
    "gentleman": "신사",
    "flesh": "살 / 고기",
    "sharp": "날카로운",
    "friend": "친구",
    "friends": "친구들",
    "club": "클럽 / 모임",
    "nice": "착한 / 친절한",
    "smile": "미소 / 웃다",
    "scared": "겁에 질린",
    "saving": "구하는 중",
    "chicken": "닭 / 치킨",
    "coop": "닭장",
    "tasty": "맛있는",
    "bite": "물다",
    "swallow": "삼키다",
    "explain": "설명하다",
    "believe": "믿다",
    "worry": "걱정하다",
    "change": "변화 / 바꾸다",
    "try": "시도하다 / 노력하다",
    "dreadful": "끔찍한",
    "alarm": "경보 / 알람",
    "pound": "동물 보호소 / 유기견 센터",
    "guard": "경비원 / 지키다",
    "key": "열쇠",
    "locked": "잠긴",
    "unlocked": "열린",
    "free": "자유로운 / 풀어주다",
    "butt-wiggler": "엉덩이를 흔드는 녀석 (책에 나오는 재미난 표현!)",
    "legs": "다리들",
    "disguise": "변장 / 가장하다",
    "cute": "귀여운",
    "little": "작은",
    "scaredy-cat": "겁쟁이 고양이",
    "meow": "야옹",
    "adventure": "모험",
    "chapter": "단원 / 챕터",
    "first": "첫 번째",
    "leader": "리더 / 지도자",
    "operation": "작전 / 작동",
    "plan": "계획"
};

// 2. 어플리케이션 상태 (State) 및 로컬스토리지 구조
let currentUsername = "";
let userList = []; // 전체 등록 유저명 목록 ['철수', '영희']

let appState = {
    username: "",
    currentPartner: null, // 'wolf', 'snake', 'shark', 'piranha'
    completedSteps: {
        partner: false,
        words: false,
        sentence: false,
        quiz: false
    },
    badgeCount: 0,
    words: {
        currentIndex: 0,
        filter: "all",
        userStatus: {}
    },
    puzzle: {
        currentIndex: 0,
        selectedWords: [],
        completed: false
    },
    quiz: {
        currentIndex: 0,
        score: 0,
        completed: false
    }
};

// 캐릭터 대사 및 파트너 설정 데이터
const CHARACTERS_INFO = {
    wolf: {
        name: "Mr. Wolf (울프)",
        avatar: "🐺",
        quote: "오늘도 영어 공부하러 왔구나! 아주 착한 행동이야. 같이 해보자!",
        colorClass: "wolf-bg",
        bubbleQuote: "첫 번째 챕터 'The Bad Guys?'에는 우리가 나쁜 녀석들이 아니라는 걸 증명하기 위해 노력하는 흥미진진한 대사들이 많이 나와! 얼른 1단계 단어 공부부터 시작하자!",
        writingHint: "`look like`(~처럼 보이다)를 사용해서 나만의 문장을 만들어봐!\n예: 'He looks like a hero.' (그는 영웅처럼 보여.)"
    },
    snake: {
        name: "Mr. Snake (스네이크)",
        avatar: "🐍",
        quote: "뭐, 귀찮지만 너가 원한다면 도와주지. 틀리면 콱 깨물어버릴지도 몰라! (장난이야)",
        colorClass: "snake-bg",
        bubbleQuote: "영어 공부라고? 흥, 난 차가운 뱀이지만 단어 외우기는 꽤 잘한다고. 꼼수 부리지 말고 1단계부터 정직하게 가자고.",
        writingHint: "`turn into`(~로 변하다)를 사용해서 변신 문장을 만들어볼까?\n예: 'The caterpillar turns into a butterfly.' (애벌레는 나비로 변해.)"
    },
    shark: {
        name: "Mr. Shark (샤크)",
        avatar: "🦈",
        quote: "하하하! 대단한데? 영어 공부를 시작하다니! 무서운 얼굴 속에 숨겨진 지식을 뽐내볼까?",
        colorClass: "shark-bg",
        bubbleQuote: "안녕 친구! 난 변장의 천재 샤크야! 영어 공부도 마치 다른 사람으로 변장하는 게임처럼 신나게 해보자고. 고고!",
        writingHint: "`rescue`(구조하다)를 넣어서 위대한 영웅 문장을 써봐!\n예: 'I will rescue the little bird.' (나는 작은 새를 구해줄 거야.)"
    },
    piranha: {
        name: "Mr. Piranha (피라냐)",
        avatar: "🐟",
        quote: "우와아앙! 퀴즈 풀기! 영어 퀴즈! 나 다 맞추고 싶어! 엄청나게 빨리 끝내버리자!",
        colorClass: "piranha-bg",
        bubbleQuote: "하핫! 작지만 엄청나게 매운맛 피라냐 등장이오! 난 참을성이 없으니까 빨리빨리 단어 카드 다 외우고 퀴즈까지 뽀개버리자!",
        writingHint: "`dangerous`(위험한)를 넣어서 찌릿한 문장을 지어봐!\n예: 'This sharp tooth is dangerous!' (이 날카로운 이빨은 위험해!)"
    }
};

// 3. 초기화 및 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", () => {
    // 전체 사용자 리스트 로드
    loadUserListFromStorage();

    // 1단계 사용자 매니지먼트 모달 이벤트
    const btnCreateUser = document.getElementById("btn-create-user");
    const newUsernameInput = document.getElementById("new-username-input");

    btnCreateUser.addEventListener("click", () => {
        const username = newUsernameInput.value.trim();
        if (username.length === 0) {
            alert("이름을 입력해 주세요!");
            return;
        }
        createUser(username);
        newUsernameInput.value = "";
    });

    newUsernameInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            btnCreateUser.click();
        }
    });

    // 헤더의 유저 변경 버튼 클릭 이벤트
    document.getElementById("btn-change-user").addEventListener("click", () => {
        showUserModal();
    });

    // 헤더의 파트너 변경 버튼 클릭 이벤트
    document.getElementById("btn-change-partner").addEventListener("click", () => {
        showPartnerModal(true); // 닫기 버튼 노출 상태로 켬
    });

    // 파트너 변경 모달 닫기 버튼 이벤트
    document.getElementById("btn-close-partner-modal").addEventListener("click", () => {
        document.getElementById("partner-modal").style.display = "none";
    });

    // 파트너 선택 카드 클릭 이벤트
    const charCards = document.querySelectorAll(".char-select-card");
    const startBtn = document.getElementById("start-adventure-btn");

    charCards.forEach(card => {
        card.addEventListener("click", () => {
            charCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            startBtn.removeAttribute("disabled");
            appState.currentPartner = card.dataset.char;
        });
    });

    startBtn.addEventListener("click", () => {
        if (appState.currentPartner) {
            appState.completedSteps.partner = true;
            selectPartner(appState.currentPartner);
            
            // 모달 닫기
            document.getElementById("partner-modal").style.display = "none";
            
            // 1단계 단어장 잠금 해제 UI 적용
            unlockStep("words");
            
            saveStateToStorage();
            renderLeaderboard();
        }
    });

    // 탭 메뉴 전환
    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetTab = item.dataset.tab;
            if (isTabLocked(targetTab)) {
                alert("이전 단계를 먼저 완료해야 이 모험으로 넘어갈 수 있어요! 🔒");
                return;
            }
            switchTab(targetTab);
        });
    });

    // --- 1단계: 단어 & 숙어 마스터 이벤트 ---
    document.getElementById("current-word-card").addEventListener("click", (e) => {
        if (e.target.closest(".tts-btn")) return;
        document.getElementById("current-word-card").classList.toggle("flipped");
    });

    document.getElementById("word-tts-btn").addEventListener("click", () => {
        const wordList = getFilteredWords();
        if (wordList.length > 0) {
            const word = wordList[appState.words.currentIndex];
            speakEnglish(word.english);
        }
    });

    document.getElementById("btn-prev-word").addEventListener("click", () => {
        const wordList = getFilteredWords();
        if (wordList.length > 0) {
            appState.words.currentIndex = (appState.words.currentIndex - 1 + wordList.length) % wordList.length;
            renderWordCard();
        }
    });

    document.getElementById("btn-next-word").addEventListener("click", () => {
        const wordList = getFilteredWords();
        if (wordList.length > 0) {
            appState.words.currentIndex = (appState.words.currentIndex + 1) % wordList.length;
            renderWordCard();
        }
    });

    document.getElementById("btn-mark-hard").addEventListener("click", () => {
        markWordStatus("hard");
    });

    document.getElementById("btn-mark-easy").addEventListener("click", () => {
        markWordStatus("easy");
    });

    document.getElementById("btn-filter-all").addEventListener("click", () => setWordFilter("all"));
    document.getElementById("btn-filter-hard").addEventListener("click", () => setWordFilter("hard"));
    document.getElementById("btn-filter-easy").addEventListener("click", () => setWordFilter("easy"));

    document.getElementById("finish-words-btn").addEventListener("click", () => {
        appState.completedSteps.words = true;
        unlockStep("sentence");
        switchTab("tab-sentence");
        saveStateToStorage();
        renderLeaderboard();
    });

    // --- 2단계: 문장 빌더 이벤트 ---
    document.getElementById("btn-reset-puzzle").addEventListener("click", resetCurrentPuzzle);
    document.getElementById("btn-check-puzzle").addEventListener("click", checkPuzzleAnswer);
    document.getElementById("btn-submit-writing").addEventListener("click", checkWritingChallenge);
    document.getElementById("finish-sentence-btn").addEventListener("click", () => {
        appState.completedSteps.sentence = true;
        unlockStep("quiz");
        switchTab("tab-quiz");
        saveStateToStorage();
        renderLeaderboard();
    });

    // --- 3단계: 단원 평가 & 요약 이벤트 ---
    document.getElementById("btn-submit-summary").addEventListener("click", submitChapterSummary);
    document.getElementById("btn-finish-summary-review").addEventListener("click", finishSummaryReview);
    document.getElementById("btn-reset-current-user").addEventListener("click", resetAdventure);

    // --- PDF 스캐너 이벤트 ---
    const dropZone = document.getElementById("pdf-drop-zone");
    const fileInput = document.getElementById("pdf-file-input");

    dropZone.addEventListener("click", () => fileInput.click());
    
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("dragover");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type === "application/pdf") {
            handlePdfFile(files[0]);
        } else {
            alert("PDF 파일(*.pdf)만 올려주세요!");
        }
    });

    fileInput.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            handlePdfFile(e.target.files[0]);
        }
    });

    // 유저 초기 상태 처리
    checkActiveUserAndBoot();
});

// 4. 로직 세부 함수들

// 유저 상태 검사 및 최초 실행
function checkActiveUserAndBoot() {
    const lastActiveUser = localStorage.getItem("bad_guys_active_username");
    if (lastActiveUser && userList.includes(lastActiveUser)) {
        selectUser(lastActiveUser);
    } else {
        showUserModal();
    }
}

// 사용자 관리 모달 표시
function showUserModal() {
    document.getElementById("user-modal").style.display = "flex";
    document.getElementById("user-modal").style.opacity = "1";
    
    const existingSection = document.getElementById("existing-users-section");
    const gridEl = document.getElementById("existing-users-grid");
    
    gridEl.innerHTML = "";
    
    if (userList.length > 0) {
        existingSection.style.display = "block";
        userList.forEach(username => {
            const btn = document.createElement("button");
            btn.className = "user-select-btn";
            
            // 각 유저의 진행도 뱃지를 미리 표시해주면 유용함
            const userState = JSON.parse(localStorage.getItem(`bad_guys_user_state_${username}`));
            const badgeCount = userState ? userState.badgeCount : 0;
            
            btn.innerHTML = `<i class="fa-solid fa-gamepad text-lime"></i> ${username}<br><span style="font-size:0.75rem; color:var(--color-muted); font-weight:normal;">뱃지: ${badgeCount}개</span>`;
            
            btn.addEventListener("click", () => {
                selectUser(username);
                document.getElementById("user-modal").style.display = "none";
            });
            gridEl.appendChild(btn);
        });
    } else {
        existingSection.style.display = "none";
    }
}

// 사용자 생성
function createUser(username) {
    if (userList.includes(username)) {
        alert("이미 같은 이름의 모험가가 있어요! 다른 이름을 써 주세요.");
        return;
    }
    
    userList.push(username);
    saveUserListToStorage();
    
    // 신규 유저 초기 상태 빌드
    const initialUserState = {
        username: username,
        currentPartner: null,
        completedSteps: {
            partner: false,
            words: false,
            sentence: false,
            quiz: false
        },
        badgeCount: 0,
        words: {
            currentIndex: 0,
            filter: "all",
            userStatus: {}
        },
        puzzle: {
            currentIndex: 0,
            selectedWords: [],
            completed: false
        },
        quiz: {
            currentIndex: 0,
            score: 0,
            completed: false
        }
    };
    
    localStorage.setItem(`bad_guys_user_state_${username}`, JSON.stringify(initialUserState));
    
    // 신규 생성 유저 선택
    selectUser(username);
    document.getElementById("user-modal").style.display = "none";
}

// 사용자 선택 및 데이터 바인딩
function selectUser(username) {
    currentUsername = username;
    localStorage.setItem("bad_guys_active_username", username);
    
    // 헤더 및 웰컴 UI 이름 동적 매핑
    document.getElementById("current-username-display").innerText = `${username} 모험가`;
    document.getElementById("lobby-username-span").innerText = username;
    
    // 유저 상태 복구
    const savedState = localStorage.getItem(`bad_guys_user_state_${username}`);
    if (savedState) {
        appState = JSON.parse(savedState);
    }
    
    // 로드맵 노드 비주얼 동기화
    syncRoadmapUI();
    updateWordCounts();
    
    // 파트너 미선택 시 파트너 선택창 팝업
    if (!appState.completedSteps.partner || !appState.currentPartner) {
        showPartnerModal(false); // 닫기버튼 미노출
    } else {
        selectPartner(appState.currentPartner);
    }
    
    // 첫 탭(로비)으로 이동
    switchTab("tab-lobby");
    renderLeaderboard();
}

// 파트너 변경/선택 모달 띄우기
function showPartnerModal(allowClose = false) {
    document.getElementById("partner-modal").style.display = "flex";
    const closeBtn = document.getElementById("btn-close-partner-modal");
    const startBtn = document.getElementById("start-adventure-btn");
    
    if (allowClose) {
        closeBtn.style.display = "inline-flex";
    } else {
        closeBtn.style.display = "none";
    }

    // 초기 상태 강제 하이라이트 복원
    const charCards = document.querySelectorAll(".char-select-card");
    charCards.forEach(c => {
        if (appState.currentPartner && c.dataset.char === appState.currentPartner) {
            c.classList.add("selected");
            startBtn.removeAttribute("disabled");
        } else {
            c.classList.remove("selected");
        }
    });

    if (!appState.currentPartner) {
        startBtn.setAttribute("disabled", "true");
    }
}

// 로드맵 비주얼 상태 동기화
function syncRoadmapUI() {
    const steps = ["words", "sentence", "quiz"];
    
    // 초기화
    steps.forEach(step => {
        const node = document.getElementById(`node-${step}`);
        if (node) {
            node.className = "map-node locked";
        }
    });
    document.getElementById("line-1").style.backgroundColor = "#000";
    document.getElementById("line-2").style.backgroundColor = "#000";
    document.getElementById("line-3").style.backgroundColor = "#000";

    // 상태 반영
    if (appState.completedSteps.partner) {
        unlockStepVisualOnly("words");
    }
    if (appState.completedSteps.words) {
        document.getElementById("node-words").className = "map-node completed";
        unlockStepVisualOnly("sentence");
    }
    if (appState.completedSteps.sentence) {
        document.getElementById("node-sentence").className = "map-node completed";
        unlockStepVisualOnly("quiz");
    }
    if (appState.completedSteps.quiz) {
        document.getElementById("node-quiz").className = "map-node completed";
    }
}

// 순수 비주얼 잠금 해제 (완료 상태 덮어쓰기 방지용)
function unlockStepVisualOnly(stepKey) {
    const node = document.getElementById(`node-${stepKey}`);
    const line = document.getElementById(`line-${stepKey === 'words' ? '1' : stepKey === 'sentence' ? '2' : '3'}`);
    
    if (node && !node.classList.contains("completed")) {
        node.className = "map-node active-step";
    }
    if (line) {
        line.style.backgroundColor = "var(--primary)";
    }
}

// 파트너 정보 화면 반영
function selectPartner(charKey) {
    const char = CHARACTERS_INFO[charKey];
    if (!char) return;

    // 헤더 상태 정보 업데이트
    document.getElementById("header-avatar").innerText = char.avatar;
    document.getElementById("header-name").innerText = char.name;
    document.getElementById("header-message").innerText = `"${char.quote}"`;

    // 로비(웰컴 배너) 정보 업데이트
    document.getElementById("welcome-partner-name").innerText = char.name;
    document.getElementById("lobby-partner-spotlight").innerText = char.avatar;

    // 캐릭터 말풍선 대사 업데이트
    document.getElementById("speech-avatar").innerText = char.avatar;
    document.getElementById("speech-name").innerText = char.name;
    document.getElementById("speech-text").innerText = char.bubbleQuote;

    // 라이팅 챌린지 힌트 가이드 업데이트
    document.getElementById("writing-hint-avatar").innerText = char.avatar;
    document.getElementById("writing-hint-text").innerHTML = `<strong>꿀팁 가이드:</strong><br>${char.writingHint}`;

    updateBadgeDisplay();
}

// 탭 잠금 여부 판정
function isTabLocked(tabId) {
    if (tabId === "tab-lobby" || tabId === "tab-pdf") return false;
    if (tabId === "tab-words" && appState.completedSteps.partner) return false;
    if (tabId === "tab-sentence" && appState.completedSteps.words) return false;
    if (tabId === "tab-quiz" && appState.completedSteps.sentence) return false;
    return true;
}

// 탭 변경
function switchTab(tabId) {
    const tabItems = document.querySelectorAll(".tab-item");
    tabItems.forEach(item => {
        if (item.dataset.tab === tabId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

    if (tabId === "tab-words") {
        appState.words.currentIndex = 0;
        renderWordCard();
    } else if (tabId === "tab-sentence") {
        initPuzzle();
    } else if (tabId === "tab-quiz") {
        initQuiz();
    }
}

// 단계 언락 및 UI 업데이트
function unlockStep(stepKey) {
    const node = document.getElementById(`node-${stepKey}`);
    const line = document.getElementById(`line-${stepKey === 'words' ? '1' : stepKey === 'sentence' ? '2' : '3'}`);
    
    if (node) {
        node.classList.remove("locked");
        node.classList.add("active-step");
    }
    if (line) {
        line.style.backgroundColor = "var(--primary)";
    }

    if (stepKey === "sentence") {
        document.getElementById("node-words").className = "map-node completed";
    } else if (stepKey === "quiz") {
        document.getElementById("node-sentence").className = "map-node completed";
    }
    
    updateBadgeCount();
}

// 뱃지 개수 업데이트
function updateBadgeCount() {
    let count = 0;
    if (appState.completedSteps.words) count++;
    if (appState.completedSteps.sentence) count++;
    if (appState.completedSteps.quiz) count++;
    appState.badgeCount = count;
    updateBadgeDisplay();
}

function updateBadgeDisplay() {
    const badgeEl = document.getElementById("badge-count");
    if (badgeEl) {
        badgeEl.innerText = `${appState.badgeCount} / 3`;
    }
}

// --- 선의의 경쟁 랭킹판(리더보드) 렌더링 로직 ---
function renderLeaderboard() {
    const tbody = document.getElementById("leaderboard-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const usersData = [];

    userList.forEach(username => {
        const rawState = localStorage.getItem(`bad_guys_user_state_${username}`);
        if (rawState) {
            const state = JSON.parse(rawState);
            
            // 진척도 계산 규칙 (총 100%):
            // 파트너 선택 완료: +10%
            // 1단계(단어 학습) 완료: +30% (또는 단어 'easy' 처리 비율에 비례)
            // 2단계(문장 조립) 완료: +30%
            // 3단계(퀴즈/요약) 완료: +30%
            let progress = 0;
            if (state.completedSteps.partner) progress += 10;
            if (state.completedSteps.words) progress += 30;
            if (state.completedSteps.sentence) progress += 30;
            if (state.completedSteps.quiz) progress += 30;

            usersData.push({
                username: username,
                partner: state.currentPartner || "미선택",
                badgeCount: state.badgeCount || 0,
                progress: progress
            });
        }
    });

    // 랭킹 정렬: 진행률 높은 순 -> 뱃지 많은 순 -> 알파벳 순
    usersData.sort((a, b) => {
        if (b.progress !== a.progress) return b.progress - a.progress;
        if (b.badgeCount !== a.badgeCount) return b.badgeCount - a.badgeCount;
        return a.username.localeCompare(b.username);
    });

    if (usersData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">등록된 모험가가 없습니다.</td></tr>`;
        return;
    }

    usersData.forEach((user, idx) => {
        const rank = idx + 1;
        let rankClass = "rank-other";
        let rankBadge = rank;
        if (rank === 1) { rankClass = "rank-1"; rankBadge = "🥇"; }
        else if (rank === 2) { rankClass = "rank-2"; rankBadge = "🥈"; }
        else if (rank === 3) { rankClass = "rank-3"; rankBadge = "🥉"; }

        const partnerEmoji = user.partner !== "미선택" ? CHARACTERS_INFO[user.partner].avatar : "❓";
        const partnerName = user.partner !== "미선택" ? CHARACTERS_INFO[user.partner].name.split(" ")[0] : "없음";

        // 완료 완료 표기
        let stepText = "로비 대기 중";
        if (user.progress >= 10) stepText = "파트너 선택완료";
        if (user.progress >= 40) stepText = "1단계: 단어완료";
        if (user.progress >= 70) stepText = "2단계: 문장완료";
        if (user.progress >= 100) stepText = "3단계: 최종완료 🏆";

        const tr = document.createElement("tr");
        if (user.username === currentUsername) {
            tr.style.backgroundColor = "rgba(163, 230, 53, 0.08)"; // 내 정보 강조
            tr.style.fontWeight = "bold";
        }

        tr.innerHTML = `
            <td><span class="rank-badge ${rankClass}">${rankBadge}</span></td>
            <td><span class="${user.username === currentUsername ? 'text-lime' : ''}">${user.username}</span> ${user.username === currentUsername ? '(나)' : ''}</td>
            <td>${partnerEmoji} ${partnerName}</td>
            <td>${stepText}</td>
            <td><i class="fa-solid fa-shield-halved text-yellow"></i> ${user.badgeCount} 개</td>
            <td>
                <div class="leaderboard-progress-bg">
                    <div class="leaderboard-progress-fill" style="width: ${user.progress}%;"></div>
                </div>
                <span>${user.progress}%</span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- Web Speech API TTS 구현 ---
function speakEnglish(text) {
    if (!('speechSynthesis' in window)) {
        alert("이 브라우저는 발음 듣기를 지원하지 않아요. 크롬 브라우저를 추천해요!");
        return;
    }
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(voice => voice.lang.startsWith("en-US") || voice.lang.startsWith("en_US"));
    if (usVoice) utterance.voice = usVoice;

    utterance.rate = 0.85; 
    window.speechSynthesis.speak(utterance);
}

// --- 1단계: 단어 & 숙어 마스터 상세 로직 ---

function getFilteredWords() {
    return WORDS_DATA.filter(word => {
        const status = appState.words.userStatus[word.id] || "unlearned";
        if (appState.words.filter === "all") return true;
        if (appState.words.filter === "hard") return status === "hard";
        if (appState.words.filter === "easy") return status === "easy";
        return true;
    });
}

function renderWordCard() {
    const wordList = getFilteredWords();
    const actionBtns = document.querySelector(".card-action-buttons");

    if (wordList.length === 0) {
        document.getElementById("word-english").innerText = "카드가 없어요";
        document.getElementById("word-korean").innerText = "필터를 변경해봐요!";
        document.getElementById("word-ex-en").innerText = "";
        document.getElementById("word-ex-ko").innerText = "";
        document.getElementById("word-card-indicator").innerText = "0 / 0";
        document.getElementById("word-type").innerText = "NONE";
        actionBtns.style.display = "none";
        return;
    }

    actionBtns.style.display = "flex";

    if (appState.words.currentIndex >= wordList.length) {
        appState.words.currentIndex = 0;
    }

    const word = wordList[appState.words.currentIndex];
    
    document.getElementById("current-word-card").classList.remove("flipped");

    setTimeout(() => {
        document.getElementById("word-english").innerText = word.english;
        document.getElementById("word-korean").innerText = word.korean;
        document.getElementById("word-ex-en").innerText = word.exEn;
        document.getElementById("word-ex-ko").innerText = word.exKo;
        document.getElementById("word-type").innerText = word.type;
        document.getElementById("word-card-indicator").innerText = `${appState.words.currentIndex + 1} / ${wordList.length}`;
        
        const cardEl = document.getElementById("current-word-card");
        const status = appState.words.userStatus[word.id] || "unlearned";
        cardEl.style.borderColor = status === "easy" ? "var(--success)" : status === "hard" ? "var(--danger)" : "var(--comic-border)";
    }, 150);
}

function markWordStatus(status) {
    const wordList = getFilteredWords();
    if (wordList.length === 0) return;
    
    const word = wordList[appState.words.currentIndex];
    appState.words.userStatus[word.id] = status;
    
    updateWordCounts();
    saveStateToStorage();

    const cardEl = document.getElementById("current-word-card");
    cardEl.style.borderColor = status === "easy" ? "var(--success)" : "var(--danger)";

    setTimeout(() => {
        if (appState.words.currentIndex < wordList.length - 1) {
            appState.words.currentIndex++;
        } else {
            appState.words.currentIndex = 0;
        }
        renderWordCard();
    }, 400);
}

function updateWordCounts() {
    let all = WORDS_DATA.length;
    let easy = 0;
    let hard = 0;

    WORDS_DATA.forEach(w => {
        const status = appState.words.userStatus[w.id];
        if (status === "easy") easy++;
        if (status === "hard") hard++;
    });

    document.getElementById("cnt-all").innerText = all;
    document.getElementById("cnt-hard").innerText = hard;
    document.getElementById("cnt-easy").innerText = easy;

    const finishBtn = document.getElementById("finish-words-btn");
    if (easy + hard >= 8) { 
        finishBtn.classList.add("primary-btn");
        finishBtn.removeAttribute("disabled");
    } else {
        finishBtn.setAttribute("disabled", "true");
        finishBtn.classList.remove("primary-btn");
    }
}

function setWordFilter(filterType) {
    appState.words.filter = filterType;
    appState.words.currentIndex = 0;
    
    document.querySelectorAll(".word-filters .filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(`btn-filter-${filterType}`).classList.add("active");
    
    renderWordCard();
}


// --- 2단계: 문장 빌더 & 쓰기 상세 로직 ---

function initPuzzle() {
    appState.puzzle.currentIndex = 0;
    appState.puzzle.selectedWords = [];
    appState.puzzle.completed = false;
    
    document.getElementById("writing-challenge-section").style.display = "none";
    document.getElementById("finish-sentence-btn").setAttribute("disabled", "true");
    document.getElementById("finish-sentence-btn").classList.remove("primary-btn");
    
    // 이전에 썼던 텍스트 및 상태 리셋
    document.getElementById("custom-sentence-input").value = "";
    document.getElementById("custom-sentence-input").removeAttribute("disabled");
    document.getElementById("btn-submit-writing").removeAttribute("disabled");
    document.getElementById("writing-feedback").innerHTML = "";

    renderPuzzle();
}

function renderPuzzle() {
    const puzzle = PUZZLE_DATA[appState.puzzle.currentIndex];
    document.getElementById("puzzle-korean-guide").innerText = `"${puzzle.korean}"`;
    document.getElementById("puzzle-indicator").innerText = `문장 ${appState.puzzle.currentIndex + 1} / ${PUZZLE_DATA.length}`;
    
    const pct = ((appState.puzzle.currentIndex) / PUZZLE_DATA.length) * 100;
    document.getElementById("puzzle-progress-fill").style.width = `${pct}%`;

    appState.puzzle.selectedWords = [];
    document.getElementById("puzzle-answer-slots").innerHTML = '<span class="text-muted" style="font-size:0.9rem;">여기에 단어가 조립됩니다. 단어 블록을 아래에서 클릭하세요!</span>';
    
    const feedbackEl = document.getElementById("puzzle-feedback");
    feedbackEl.innerText = "";
    feedbackEl.className = "puzzle-result-feedback";
    
    document.getElementById("btn-check-puzzle").setAttribute("disabled", "true");

    const shuffledWords = [...puzzle.words].sort(() => Math.random() - 0.5);
    const poolEl = document.getElementById("puzzle-word-pool");
    poolEl.innerHTML = "";

    shuffledWords.forEach((word, index) => {
        const wordBtn = document.createElement("div");
        wordBtn.className = "word-block";
        wordBtn.innerText = word;
        wordBtn.dataset.word = word;
        wordBtn.dataset.index = index;
        
        wordBtn.addEventListener("click", () => {
            selectWordInPuzzle(wordBtn);
        });
        
        poolEl.appendChild(wordBtn);
    });
}

function selectWordInPuzzle(wordBtn) {
    const word = wordBtn.dataset.word;
    const answerSlots = document.getElementById("puzzle-answer-slots");
    if (appState.puzzle.selectedWords.length === 0) {
        answerSlots.innerHTML = "";
    }

    appState.puzzle.selectedWords.push(word);
    wordBtn.classList.add("selected-in-pool");

    const answerBlock = document.createElement("div");
    answerBlock.className = "word-block";
    answerBlock.innerText = word;
    
    answerBlock.addEventListener("click", () => {
        const idx = appState.puzzle.selectedWords.indexOf(word);
        if (idx > -1) {
            appState.puzzle.selectedWords.splice(idx, 1);
        }
        answerBlock.remove();
        wordBtn.classList.remove("selected-in-pool");
        
        if (appState.puzzle.selectedWords.length === 0) {
            answerSlots.innerHTML = '<span class="text-muted" style="font-size:0.9rem;">여기에 단어가 조립됩니다. 단어 블록을 아래에서 클릭하세요!</span>';
            document.getElementById("btn-check-puzzle").setAttribute("disabled", "true");
        }
    });

    answerSlots.appendChild(answerBlock);

    const currentPuzzle = PUZZLE_DATA[appState.puzzle.currentIndex];
    if (appState.puzzle.selectedWords.length === currentPuzzle.words.length) {
        document.getElementById("btn-check-puzzle").removeAttribute("disabled");
    }
}

function resetCurrentPuzzle() {
    renderPuzzle();
}

function checkPuzzleAnswer() {
    const currentPuzzle = PUZZLE_DATA[appState.puzzle.currentIndex];
    const userSentence = appState.puzzle.selectedWords.join(" ");
    const correctSentence = currentPuzzle.english;

    const feedbackEl = document.getElementById("puzzle-feedback");
    
    if (userSentence.toLowerCase().replace(/[^a-z0-9 ]/g, "") === correctSentence.toLowerCase().replace(/[^a-z0-9 ]/g, "")) {
        feedbackEl.innerText = "🎉 대단해요! 정답입니다!";
        feedbackEl.className = "puzzle-result-feedback feedback-success";
        speakEnglish(correctSentence);
        
        setTimeout(() => {
            if (appState.puzzle.currentIndex < PUZZLE_DATA.length - 1) {
                appState.puzzle.currentIndex++;
                renderPuzzle();
            } else {
                document.getElementById("puzzle-progress-fill").style.width = "100%";
                document.getElementById("puzzle-korean-guide").innerText = "모든 문장 퍼즐 완료! 💯";
                document.getElementById("puzzle-word-pool").innerHTML = "";
                document.getElementById("puzzle-answer-slots").innerHTML = `<div class='text-center text-lime font-bold'>축하해요! ${PUZZLE_DATA.length}개의 영어 문장 퍼즐을 모두 풀었어요!</div>`;
                document.getElementById("btn-check-puzzle").setAttribute("disabled", "true");
                
                showWritingChallenge();
            }
        }, 1500);
    } else {
        feedbackEl.innerText = "❌ 앗! 순서가 조금 틀렸어요. 다시 조립해 볼까요?";
        feedbackEl.className = "puzzle-result-feedback feedback-error";
    }
}

function showWritingChallenge() {
    document.getElementById("writing-challenge-section").style.display = "block";
    document.getElementById("writing-challenge-section").scrollIntoView({ behavior: "smooth" });
}

function checkWritingChallenge() {
    const textInput = document.getElementById("custom-sentence-input").value.trim();
    const feedbackEl = document.getElementById("writing-feedback");
    
    if (textInput.length < 10) {
        feedbackEl.innerHTML = "<span class='text-danger'>좀 더 길게 영어로 써봐요! (최소 3개 단어 이상 필요해요)</span>";
        return;
    }

    const englishPattern = /[a-zA-Z]/;
    if (!englishPattern.test(textInput)) {
        feedbackEl.innerHTML = "<span class='text-danger'>한글 대신 영어 알파벳을 사용해서 문장을 지어주세요!</span>";
        return;
    }

    feedbackEl.innerHTML = `<span class='text-success'>🎉 정말 멋진 영어 문장이에요! 파트너 친구가 감탄했어요! ✍ (${textInput})</span>`;
    document.getElementById("btn-submit-writing").setAttribute("disabled", "true");
    document.getElementById("custom-sentence-input").setAttribute("disabled", "true");
    
    const finishBtn = document.getElementById("finish-sentence-btn");
    finishBtn.removeAttribute("disabled");
    finishBtn.classList.add("primary-btn");
    
    saveStateToStorage();
}


// --- 3단계: 단원 평가 & 요약 상세 로직 ---

function initQuiz() {
    appState.quiz.currentIndex = 0;
    appState.quiz.score = 0;
    appState.quiz.completed = false;
    
    document.getElementById("quiz-section-container").style.display = "block";
    document.getElementById("summary-section-container").style.display = "none";
    document.getElementById("model-summary-pane").style.display = "none";
    document.getElementById("quiz-success-overlay").style.display = "none";
    
    // 요약문 에디터 내용 리셋
    document.getElementById("user-summary-textarea").value = "";
    document.getElementById("btn-submit-summary").style.display = "inline-block";

    renderQuiz();
}

function renderQuiz() {
    const quiz = QUIZ_DATA[appState.quiz.currentIndex];
    
    document.getElementById("quiz-number").innerText = `Q${appState.quiz.currentIndex + 1}.`;
    document.getElementById("quiz-text").innerText = quiz.question;
    
    const pct = ((appState.quiz.currentIndex) / QUIZ_DATA.length) * 100;
    document.getElementById("quiz-progress-fill").style.width = `${pct}%`;
    
    const feedbackEl = document.getElementById("quiz-feedback");
    feedbackEl.innerText = "";
    feedbackEl.className = "quiz-feedback";

    const optionsEl = document.getElementById("quiz-options-list");
    optionsEl.innerHTML = "";
    
    quiz.options.forEach((opt, idx) => {
        const optCard = document.createElement("div");
        optCard.className = "quiz-option-card";
        optCard.innerHTML = `<span class="opt-num">${idx + 1}.</span> <span>${opt}</span>`;
        
        optCard.addEventListener("click", () => {
            const allCards = optionsEl.querySelectorAll(".quiz-option-card");
            if (allCards[0].classList.contains("correct") || allCards[0].classList.contains("wrong") || 
                allCards[1].classList.contains("correct") || allCards[1].classList.contains("wrong") ||
                allCards[2]?.classList.contains("correct") || allCards[2]?.classList.contains("wrong") ||
                allCards[3]?.classList.contains("correct") || allCards[3]?.classList.contains("wrong")) return;

            checkQuizAnswerCard(optCard, idx, quiz);
        });
        
        optionsEl.appendChild(optCard);
    });
}

function checkQuizAnswerCard(optCard, selectedIdx, quiz) {
    const feedbackEl = document.getElementById("quiz-feedback");
    
    if (selectedIdx === quiz.answer) {
        optCard.classList.add("correct");
        feedbackEl.innerText = quiz.feedback;
        feedbackEl.classList.add("feedback-success");
        appState.quiz.score += 20; 
    } else {
        optCard.classList.add("wrong");
        feedbackEl.innerText = `아쉬워요! 정답은 ${quiz.answer + 1}번이었어요.`;
        feedbackEl.classList.add("feedback-error");
        
        const allCards = document.querySelectorAll(".quiz-option-card");
        allCards[quiz.answer].classList.add("correct");
    }

    setTimeout(() => {
        if (appState.quiz.currentIndex < QUIZ_DATA.length - 1) {
            appState.quiz.currentIndex++;
            renderQuiz();
        } else {
            document.getElementById("quiz-progress-fill").style.width = "100%";
            document.getElementById("quiz-section-container").style.display = "none";
            showSummarySection();
        }
    }, 2000);
}

function showSummarySection() {
    document.getElementById("summary-section-container").style.display = "block";
    document.getElementById("summary-section-container").scrollIntoView({ behavior: "smooth" });
}

function submitChapterSummary() {
    const summaryText = document.getElementById("user-summary-textarea").value.trim();
    if (summaryText.length < 20) {
        alert("책을 읽고 느낀 줄거리를 조금만 더 자세히 써볼까요? (최소 20자 이상)");
        return;
    }

    document.getElementById("model-summary-pane").style.display = "block";
    document.getElementById("btn-submit-summary").style.display = "none";
}

function finishSummaryReview() {
    appState.completedSteps.quiz = true;
    updateBadgeCount();
    saveStateToStorage();
    renderLeaderboard();
    
    document.getElementById("quiz-success-overlay").style.display = "flex";
    
    startConfetti();
}

function resetAdventure() {
    // 현재 사용자의 학습 정보만 전체 초기화
    appState = {
        username: currentUsername,
        currentPartner: null,
        completedSteps: {
            partner: false,
            words: false,
            sentence: false,
            quiz: false
        },
        badgeCount: 0,
        words: {
            currentIndex: 0,
            filter: "all",
            userStatus: {}
        },
        puzzle: {
            currentIndex: 0,
            selectedWords: [],
            completed: false
        },
        quiz: {
            currentIndex: 0,
            score: 0,
            completed: false
        }
    };
    
    saveStateToStorage();
    
    // UI 동기화 및 메인 이동
    syncRoadmapUI();
    updateWordCounts();
    updateBadgeDisplay();
    
    // 로비 이동 및 파트너 변경 모달 자동 열기
    switchTab("tab-lobby");
    showPartnerModal(false);
    renderLeaderboard();
}


// --- 4단계: 마법의 PDF 단어 스캐너 로직 ---

function handlePdfFile(file) {
    const progressContainer = document.getElementById("scanner-progress-container");
    const progressFill = document.getElementById("scanner-progress-fill");
    const progressText = document.getElementById("scan-progress-text");
    const resultContainer = document.getElementById("scan-result-container");

    progressContainer.style.display = "block";
    resultContainer.style.display = "none";
    progressFill.style.width = "0%";
    progressText.innerText = "0%";

    const fileReader = new FileReader();

    fileReader.onload = function() {
        const typedarray = new Uint8Array(this.result);
        
        pdfjsLib.getDocument(typedarray).promise.then(pdf => {
            const maxPages = Math.min(pdf.numPages, 10); 
            let extractedText = "";
            let pagesProcessed = 0;

            for (let i = 1; i <= maxPages; i++) {
                pdf.getPage(i).then(page => {
                    page.getTextContent().then(textContent => {
                        const pageText = textContent.items.map(item => item.str).join(" ");
                        extractedText += " " + pageText;
                        pagesProcessed++;

                        const percent = Math.round((pagesProcessed / maxPages) * 100);
                        progressFill.style.width = `${percent}%`;
                        progressText.innerText = `${percent}%`;

                        if (pagesProcessed === maxPages) {
                            processExtractedText(extractedText);
                        }
                    });
                });
            }
        }).catch(err => {
            alert("PDF를 읽는 중에 에러가 났어요. 파일이 손상되었는지 확인해주세요.");
            progressContainer.style.display = "none";
        });
    };

    fileReader.readAsArrayBuffer(file);
}

function processExtractedText(text) {
    document.getElementById("scanner-progress-container").style.display = "none";
    
    const words = text
        .toLowerCase()
        .replace(/[^a-zA-Z\s]/g, "") 
        .split(/\s+/);
    
    const wordCounts = {};
    const stopWords = new Set([
        "the", "a", "an", "and", "or", "but", "to", "of", "in", "on", "at", "for", "with",
        "is", "are", "was", "were", "be", "been", "have", "has", "had", "do", "does", "did",
        "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them",
        "my", "your", "his", "their", "our", "this", "that", "these", "those", "not", "no",
        "yes", "so", "then", "if", "then", "about", "all", "out", "up", "down", "what", "who",
        "how", "where", "why", "can", "will", "would", "could", "should", "some", "any", "no",
        "here", "there", "go", "get", "come", "make", "take"
    ]);

    words.forEach(word => {
        if (word.length > 2 && !stopWords.has(word)) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
    });

    const sortedWords = Object.keys(wordCounts)
        .sort((a, b) => wordCounts[b] - wordCounts[a])
        .slice(0, 30); 

    const gridEl = document.getElementById("scanned-words-grid");
    gridEl.innerHTML = "";

    if (sortedWords.length === 0) {
        gridEl.innerHTML = "<p class='text-muted'>추출할 수 있는 단어가 없어요.</p>";
    } else {
        sortedWords.forEach(word => {
            const wordCard = document.createElement("div");
            wordCard.className = "scanned-word-btn";
            wordCard.innerHTML = `<i class="fa-solid fa-sparkles text-yellow"></i> <strong>${word}</strong>`;
            
            wordCard.addEventListener("click", () => {
                const meaning = MINI_DICTIONARY[word] || "사전 뜻 미등록 (클릭하여 영어 발음을 들어보세요!)";
                speakEnglish(word);
                alert(`📚 단어: ${word}\n🔊 발음 재생 중...\n💡 뜻: ${meaning}`);
            });
            
            gridEl.appendChild(wordCard);
        });
    }

    document.getElementById("scan-result-container").style.display = "block";
    document.getElementById("scan-result-container").scrollIntoView({ behavior: "smooth" });
}


// --- 5. 로컬스토리지 저장 로직 (사용자별 분리) ---

function saveStateToStorage() {
    if (!currentUsername) return;
    localStorage.setItem(`bad_guys_user_state_${currentUsername}`, JSON.stringify(appState));
}

function loadUserListFromStorage() {
    const rawList = localStorage.getItem("bad_guys_users");
    if (rawList) {
        try {
            userList = JSON.parse(rawList);
        } catch (e) {
            userList = [];
        }
    } else {
        userList = [];
    }
}

function saveUserListToStorage() {
    localStorage.setItem("bad_guys_users", JSON.stringify(userList));
}


// --- 6. 축하 Confetti 폭죽 효과 구현 ---
let confettiInterval;
function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#a3e635", "#38bdf8", "#fde047", "#f87171", "#4ade80", "#a78bfa"];
    const particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 6;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speedY = Math.random() * 3 + 4;
            this.speedX = Math.random() * 4 - 2;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 4 - 2;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        confettiInterval = requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        cancelAnimationFrame(confettiInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

window.addEventListener("resize", () => {
    const canvas = document.getElementById("confetti-canvas");
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

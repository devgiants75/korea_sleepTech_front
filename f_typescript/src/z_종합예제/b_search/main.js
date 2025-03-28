var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
// main.ts
{
    //! 3) 사용자 정보를 외부 API에서 가져오는 비동기 함수
    // @Params: X
    // @Return: 외부 API에서 받아온 객체 정보를 반환 (Promise<UsersType>)
    var fetchUsers_1 = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users];
                case 3:
                    error_1 = _a.sent();
                    console.error('Fetch error: ', error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // async function(): 반환타입 {}
    //! 4) 사용자 정보를 받아 HTML 요소를 생성하는 함수
    // @Params: user - IUser 타입
    // @Return: HTMLElement 타입
    var createUserCard_1 = function (user) {
        var userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = "\n    <h2>".concat(user.name, "</h2>\n    <p><strong>Username: </strong>").concat(user.username, "</p>\n    <p><strong>Email: </strong>").concat(user.email, "</p>\n  ");
        // const titleH2 = document.createElement('h2');
        // titleH2.textContent = `${user.name}`;
        // userCard.appendChild(titleH2);
        return userCard;
    };
    //! 5) 사용자 정보 배열을 받아 화면에 표시하는 함수(createUserCard에 각 객체 전달)
    // @Params: users - UsersType 타입
    // @Return: X - void 타입
    var displayUsers_1 = function (users) {
        var userList = document.getElementById('user-list');
        // const userList: HTMLElement | null
        if (userList) { // userList가 null이 아니라면
            userList.innerHTML = ''; // const userList: HTMLElement
            users.forEach(function (user) {
                var userCard = createUserCard_1(user);
                userList.appendChild(userCard);
            });
        }
    };
    //! 6) 사용자 정보를 필터링하는 함수
    // : 사용자로부터 입력받은 검색어를 사용해 
    //   , 사용자의 이름, 사용자명, 이메일 중 하나라도 포함된 경우 출력
    // @Params: users - UsersType 타입 (전체 사용자 데이터)
    //          , query - string 타입 (필터링할 검색어)
    // @Return: UsersType 타입 (필터링 된 사용자들의 데이터)
    var filterUsers_1 = function (users, query) {
        return users.filter(function (user) {
            return user.name.toLowerCase().includes(query.toLowerCase())
                || user.username.toLowerCase().includes(query.toLowerCase())
                || user.email.toLowerCase().includes(query.toLowerCase());
        });
    };
    //! 7) 사용자 정보를 정렬하는 함수
    // Name 또는 Email을 기준으로 정렬 (오름차순)
    // @Params: users - UsersType 타입 (사용자 정보)
    //          , key - 'literal 타입' (정렬 키워드를 저장)
    // @Return: UsersType 타입 (정렬된 데이터)
    var sortUsers_1 = function (users, key) {
        // 지정된 키(name | email)를 기준으로 사용자 정보 정렬
        //? [...users]
        // : 새로운 배열 주소값!에 기존의 사용자 데이터(요소)만 복사해서 가져옴
        // - 깊은 복사
        // - 배열의 불변성을 보완
        //? 배열.sort()
        // : 배열의 요소를 정렬할 때 사용
        // - 콜백함수를 인자로 받음 (콜백함수의 인자는 비교할 데이터를 2가지 입력)
        // cf) 현재 a, b 데이터는 객체 (IUser 인터페이스 타입)
        // - key가 'name'으로 전달되는 경우
        // - 각 데이터들의 name값을 비교
        // a[name].localeCompare(b[name])
        //? 문자열.localeCompare(문자열)
        // : 비교 함수
        // - 문자열을 비교하는 메서드 (알파벳 순 정렬에 유용)
        // - 반환값
        //   -1: 기준 문자열(a)이 비교 문자열(b)보다 앞에 있음
        //    0: 두 문자열이 같음
        //    1: 기준 문자열이 비교 문자열보다 뒤에 있음
        return __spreadArray([], users, true).sort(function (a, b) { return a[key].localeCompare(b[key]); });
    };
    //! 8) 이벤트 리스너 추가 함수
    // @Params: users - UsersType 타입 
    // @Return: X
    var addEventListener_1 = function (users) {
        var searchInput = document.getElementById('search-input');
        var sortSelect = document.getElementById('sort-select');
        searchInput.addEventListener('input', function () {
            var query = searchInput.value;
            var filteredUsers = filterUsers_1(users, query);
            // 필터링된 데이터를 정렬
            // const sortKey = sortSelect.value; // const sortKey: string
            var sortKey = sortSelect.value; // const sortKey: "name" | "email"
            var sortedUsers = sortUsers_1(filteredUsers, sortKey);
            displayUsers_1(sortedUsers);
        });
        sortSelect.addEventListener('change', function () {
            var query = searchInput.value;
            var filteredUsers = filterUsers_1(users, query);
            var sortKey = sortSelect.value;
            var sortedUsers = sortUsers_1(filteredUsers, sortKey);
            displayUsers_1(sortedUsers);
        });
    };
    //! 9) 초기화 함수
    // : 사용자 데이터를 가져와 화면에 표시 + 이벤트 리스너를 설정
    var init = function () { return __awaiter(_this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUsers_1()];
                case 1:
                    users = _a.sent();
                    displayUsers_1(users);
                    addEventListener_1(users);
                    return [2 /*return*/];
            }
        });
    }); };
    // function(): void {}
    document.addEventListener('DOMContentLoaded', init);
}

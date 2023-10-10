import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const articles = [
	{
		id: 'KgibARxwROOetDlT0a7se',
		title: '#公告 時事板 9/27 起實施身份驗證（2021/10/4 更新）',
		content: `為維護時事板討論品質，9/27 起將在本板實施身份驗證
所有欲於時事板進行發文、互動的卡友，必須先完成身分驗證，以繼續參與討論互動

Dcard 實施身分驗證程序而向您蒐集的身分證、健保卡、居留證等個人資料，僅供 Dcard 審核使用，Dcard 不會將您為此提供的任何資料給 Dcard 的業務合作對象、主管機關或任何第三人利用。
詳細規範請參閱 Dcard 知識庫〈Dcard 會如何處理我上傳的個人證件資料？〉
https://about.dcard.tw/faq/posts/98

dcard.tw
https://about.dcard.tw/faq/posts/98

詳細驗證流程請參考以下資訊：


📣身份驗證實施時間：
2021/9/27 起，開始階段性要求卡友進行驗證流程



📣驗證流程如下：

1. 尚未完成身份驗證之卡友，於時事板欲發表文章，或是在文章留言點擊愛心、留言時，將跳出「請先完成看板驗證」視窗。
2. 點擊「立即驗證」，完成填寫真實姓名、生日、性別，上傳身份證件照片，確認正確無誤後送出。
3. 待 2-3 個工作天，由官方審核小組完成驗證之後，您即可繼續於時事板進行發文、愛心、留言等互動。



📣簡易問與答：

Q: 為什麼要身份驗證？
A: 為了維護看板討論品質，我們必須透過實施身份驗證，確保每一位發表意見、參與互動的帳號皆為真實存在的卡友。

Q: 詳細的驗證流程是什麼？
完整驗證流程步驟，請參考以下網址：
https://about.dcard.tw/faq/posts/97

dcard.tw
https://about.dcard.tw/faq/posts/97
⚠️ 上傳的身分證件必須為完整正本，不可有塗改或遮蔽，請特別留意！

Q: 為什麼我會被抽到身份驗證？
A: 此驗證將採階段性進行，每一階段要求該階段卡友驗證，逐步完成全體卡友身份驗證。

Q: 驗證完，什麼時候才能繼續在時事板發文互動？
A: 需請您耐心等待 2-3 個工作天，待官方審核小組完成驗證後即可繼續發文互動。我們理解這會帶給來您短時間使用上的不便，還請見諒。

Q: 未完成驗證，我的帳號除了時事板，會影響到我在其他看板的互動嗎？
A: 不會，此身份驗證僅在時事板、COVID-19 及防疫生活板實施，僅於此三個看板互動需要驗證，並不影響其他看板的使用。


如有更多身份驗證上的問題，也歡迎您私訊 FB 客服瞭解更多資訊。
感謝卡友的理解和配合！`
	},
	{
		id: 'pJ7GQaWKZgVzZ3QX2LRZf',
		title: '[問卦] 到底誰騙我經濟不好？',
		content: `出國人超多機場爆滿 我自己上個月剛從歐洲回來很清楚 不相信的自己去機場看

日本各國遊客貢獻消費額台灣佔最高（可以去查有新聞）

各餐廳百貨每到假日大爆滿 不信的也請自己去看

飯店業大家都靠北台灣飯店貴 我也覺得台灣飯店很貴 但奇怪的是貴的反而很難訂（三小？

完全沒有跡象是經濟不好的感覺 還是有是我自己沒看出來
`
	},
	{
		id: '9j8wV69nnOI1zGwMZno8O',
		title: '[問卦] 九萬跟四萬的125cc機車差在哪裡？',
		content: `如題
    GP125跟JET SR或勁戰
    價差快兩倍
    除了價格
    不都塑膠殼車？
    
    為什麼我看路上都是JET SR跟勁戰？
    
    大家太有錢嗎？`
	},
	{
		id: '2tZw3CnGr_MvnEyFKyc5N',
		title: '[小說轉載] 太平妖術',
		content: `轉載自 https://trow.cc/board/showtopic=49584

註：文中諸如“爺”字等多個字眼在天平天國內是犯了避諱的，除非用於上帝，否則其他情況下，不論口頭還是行文都是不被允許使用的。但在文中太平天國最後這段時期內，這類禁令早已名存實亡，早已是怎麼順口怎麼來了，各位讀者還請注意。

一、
我感覺自己騎著一匹長相怪異又神駿異常的寶馬，奔馳在年月的長河中。
神駿快過了光，過去、現在、未來的種種，就像馬騎燈一般，被快速地翻過，讓我來不及細看。場景中的聲色，就像五彩的湖泊和無盡的長歌，席捲著我飄流在模糊的，回憶的夢中。
我回到了道光廿二年的天京。那時這裡還不叫做天京，而是叫江寧。
駿馬馱著我飛馳到江寧的下關江上，那裡停著一艘戰艦，上面掛著英吉利的紅藍米字旗。
我和神駿躍上戰艦，就聽到有人在那裡朗誦著什麼，同時又有人將其翻譯成洋文。
“今大皇帝准將香港一島給予大英國君主。”
“今在中國所管轄各地方被禁者，大清大皇帝准即釋放。”。
“酌定銀數共二千一百萬圓……”
是《江寧條約》。
《江寧條約》，對外敵，贖香港、給煙錢、釋放屠夫、漢奸免罪。
而這二千一百萬圓鴉片的賠償錢，實行到萬千清國百姓上，便是百姓到小吏，到大吏，到衙門，到縣官，到戶部，戶部裡又來吸一遭血……敲骨吸髓，不過如此。
官官刮脂，層層剋扣，家家中飽私囊；只有百姓飢死，賣兒鬻女，而那流毒中國大地的鴉片，則會變本加厲地在天朝之間橫行。
《江寧條約》，燒殺天朝子民的屠夫無罪，販賣荼毒百姓平民的鴉片販子無罪，天朝有罪，天朝罪在勞煩英邦燒殺掠奪天朝子民，清廷將竭力賠償英邦攻打我國土，所耗費的軍費！
我憤怒地睜開了眼。
是夢。
……
……
翻身起床，我就看到守夜的蛾兒，頭靠著床腳昏睡過去，面有菜色，她怕也是幾十日來，都靠著“甜露”果腹了。
披衣開窗，夜色還很深沉，我便觀測了下周天繁星的位置，估摸著天剛進寅時。看來已經到和二王約定的四月十七日了。
太平天國甲子十四年，天歷四月十七，婁宿值日，若三顆婁星明亮，則可興兵聚眾，畜牧生養，天下大吉。
但它們越來越昏暗了。
天京被圍數月，斷糧已久，每天都有大批大批的人餓死在城中。天王陛下麻痺自己，將野草稱為“甜露”而食，天京城中也俱傳，天王食咁甜露病倒了。
但我洪仁玕作為天國干王，自然知道那些不足為外人道也的秘辛。
天王陛下不僅身體康健，而且還在天朝宮殿，即天王府中，拜著什麼東西。
那被膜拜的，絕不是我天國天教的至高神——天父爺火華。天王陛下自天國定都天京以來，便對時事政務不怎麼重視，日日閉於天王府中，指導天國的國教事務。這數年來，我幾乎沒怎麼見過我這位天王兄長。就算他是我的族兄，我也對他的印象越來越模糊了。而天王這種可稱自閉的行為，從半年前，天京被清妖封鎖的前夕，一名自稱是廣州來的天王故人，埃德溫·史蒂文斯入京以來，變得更加嚴重。
史蒂文斯這人我早有耳聞，他是粵地頗有名氣的基督傳教士，天王在道光十六年，在廣州府試，就偶遇了這個番邦基督徒。天王閱讀了他分發的《勸世良言》，在此書的啟發下，第二年丁酉年，天王陛下就昏迷數日，突發異夢。
在那詭譎莫名的異夢中，天王面見到了天父爺火華，甦醒後的一段時日內，天王就聲稱自己是天父爺火華第二子，天兄耶蘇的二弟。
至於史蒂文斯，在廣州布道偶遇天王已將近三十年，卻在半年之前，天國風雨飄搖之時，隻身來到天京。二人本只是在近三十年前，見過一面，但史蒂文斯卻在半年前來到後，受到了天王陛下的絕高禮遇，甚至天王還讓他長久居住於信王府中。
這和天王應該只有一面之緣的史蒂文斯，他分發給天王的啟蒙讀物《勸世良言》，甚至都是華人傳教士梁發所撰，和史蒂文斯沒有任何關係，但他卻享如此厚遇，這裡面絕有難言的秘密。而也正是從他的到來開始，天王不再見人，半年來靠著府內傳出的一道道詔令發號，甚至多地多有流傳，天王陛下，已經死了。
如今人心離散，城外清廷妖軍虎視眈眈。為了天國的未來，為了本應受天國庇佑，現今卻飽受飢寒之苦的萬千子民，兩月前，我還是安插了我僅有的一名探子，進了天王府。終於，在近十日前，我得到密報，天王已將他寬廣的寢房作為神堂，秘密拜著一尊金黃色的，身著長袍戴著面具的神像。
我雖然身為天王的族弟，五年前被拜干王，可統領千萬天官天將，但從香港入京這五年來，我手握實權僅僅數月，名義上在天國內，我一人之下萬人之上，但數年傾軋，再到如今“小天堂”天京斷糧數月，使得人心從未如此離散過，現在周身，算上護衛探子，我可信任的人都不過五指之數。
但外來的助力我還是順利找到了。而且在今天，我就會冒著政治生涯結束，乃至生命的危險，要在天王的面前，發掘他最隱晦的秘密。為了天國，為了萬民，為了我自年輕，就要拯救飽受摧殘的中國的夢想，我甘願捨棄一切。
……
……
待到掛上辰牌，我帶上早就準備好的一卷筆記，前往了天朝宮殿。在到達天朝宮殿求見天王時，我聲稱在《哥林多前書》內，找到了能證明，天王之前關於天父爺火華思想的解讀，有錯誤之處的片段，並請求親自為天王解說。
凡是涉及到天教、基督教問題的，天王都從不忽視。而對天父思想理解有誤，更不是小事。如我所料地等待許久，府中終於傳來了准許求見的口令。身為干王，我不用被搜身查驗就可進入天王府。而我終於能在多年後，得以近距離接觸到天王陛下。
走過依稀有著記憶的迴廊，果然，我被領到了天王的寢房。天王對所有人宣稱病危，由幼天王洪天貴福暫理國務，那麼他也只能作出病重的樣子，在床榻上召見我——天國危急，百姓苦不堪言，天王作為天國之主，居然閉於府中，寄希望於不明的異教，想到這裡，我心中更加鬱塞乃至憤懣。
雖然天王府中估計也是存糧無幾，但天王的寢房仍然華貴，寢房門一開，我就大致掃視了下，果然該收走的都沒有了，房內總體和以前無異。
天王臥於床上，外圍由顏色深沉，象徵王權的金黃床幔遮掩著。在我行跪拜禮時，婢女將我帶來的筆記遞入床幔內，透過紗幔，我瞥見天王坐起開始閱讀起筆記來。
“你們，都退下。”好一會兒後，天王終於下令屏退了奴婢護衛。這聲音內在的虛弱居然像是真實的，但這聲音又是如此陌生，竟沒有喚起我一絲關於天王的記憶。
“站起來吧，說說。”陌生虛弱的聲音下令道。我早早就打好了腹稿，開始瞭解說。天王十四年前在桂省金田村起義後，遠在外鄉的我逃離了清廷的追捕，在天國壬子二年抵達英吉利管轄的香港後，我就在瑞邦巴色會受洗，學習了數年正統基督新教和天文觀星，甚至任職過倫敦傳道會的布道師，就我對基督上帝的深刻見識，寫出一份準備甚久的筆記，暫時唬住天王陛下還是沒問題的。
我也假裝說得自己激動起來，在寢房內來回走動，我趁機觀察，想找到一些蛛絲馬跡，而天王也沒有阻止我，似乎還在認真地傾聽。
令我失望的是，可以看出來，這寬大的寢房在我進來前，已經過了忙而不亂的收整，沒有任何東西被落了下來。等我說完，天王點評了幾句，表示不能接受我的觀點，又語氣相當溫和地要我退出寢房。
我面無表情地由人引導著走在迴廊中，面前的年輕僕人越走越慢，待到四下無人，我倆挨得很近的時候，年輕僕人突然塞給我兩冊書本，接著他又像什麼也沒發生一樣，加快腳步走到我的前面繼續領路。
果然，我突然求見，就算他們再拖延時間收拾，只要是會把東西搬出房外，光天化日下也會露出行跡。看來我這安插在這裡的探子，在我留在寢房的時候，還是有所收穫的。
出府的時候也沒被搜身，回到干王府，進入書房，我就取出了兩冊書本,這時仔細來看，分別是一冊很厚本子以及一本薄書。、
我感覺自己騎著一匹長相怪異又神駿異常的寶馬，奔馳在年月的長河中。
神駿快過了光，過去、現在、未來的種種，就像馬騎燈一般，被快速地翻過，讓我來不及細看。場景中的聲色，就像五彩的湖泊和無盡的長歌，席捲著我飄流在模糊的，回憶的夢中。
我回到了道光廿二年的天京。那時這裡還不叫做天京，而是叫江寧。
駿馬馱著我飛馳到江寧的下關江上，那裡停著一艘戰艦，上面掛著英吉利的紅藍米字旗。
我和神駿躍上戰艦，就聽到有人在那裡朗誦著什麼，同時又有人將其翻譯成洋文。
“今大皇帝准將香港一島給予大英國君主。”
“今在中國所管轄各地方被禁者，大清大皇帝准即釋放。”。
“酌定銀數共二千一百萬圓……”
是《江寧條約》。
《江寧條約》，對外敵，贖香港、給煙錢、釋放屠夫、漢奸免罪。
而這二千一百萬圓鴉片的賠償錢，實行到萬千清國百姓上，便是百姓到小吏，到大吏，到衙門，到縣官，到戶部，戶部裡又來吸一遭血……敲骨吸髓，不過如此。
官官刮脂，層層剋扣，家家中飽私囊；只有百姓飢死，賣兒鬻女，而那流毒中國大地的鴉片，則會變本加厲地在天朝之間橫行。
《江寧條約》，燒殺天朝子民的屠夫無罪，販賣荼毒百姓平民的鴉片販子無罪，天朝有罪，天朝罪在勞煩英邦燒殺掠奪天朝子民，清廷將竭力賠償英邦攻打我國土，所耗費的軍費！
我憤怒地睜開了眼。
是夢。
……
……
翻身起床，我就看到守夜的蛾兒，頭靠著床腳昏睡過去，面有菜色，她怕也是幾十日來，都靠著“甜露”果腹了。
披衣開窗，夜色還很深沉，我便觀測了下周天繁星的位置，估摸著天剛進寅時。看來已經到和二王約定的四月十七日了。
太平天國甲子十四年，天歷四月十七，婁宿值日，若三顆婁星明亮，則可興兵聚眾，畜牧生養，天下大吉。
但它們越來越昏暗了。
天京被圍數月，斷糧已久，每天都有大批大批的人餓死在城中。天王陛下麻痺自己，將野草稱為“甜露”而食，天京城中也俱傳，天王食咁甜露病倒了。
但我洪仁玕作為天國干王，自然知道那些不足為外人道也的秘辛。
天王陛下不僅身體康健，而且還在天朝宮殿，即天王府中，拜著什麼東西。
那被膜拜的，絕不是我天國天教的至高神——天父爺火華。天王陛下自天國定都天京以來，便對時事政務不怎麼重視，日日閉於天王府中，指導天國的國教事務。這數年來，我幾乎沒怎麼見過我這位天王兄長。就算他是我的族兄，我也對他的印象越來越模糊了。而天王這種可稱自閉的行為，從半年前，天京被清妖封鎖的前夕，一名自稱是廣州來的天王故人，埃德溫·史蒂文斯入京以來，變得更加嚴重。
史蒂文斯這人我早有耳聞，他是粵地頗有名氣的基督傳教士，天王在道光十六年，在廣州府試，就偶遇了這個番邦基督徒。天王閱讀了他分發的《勸世良言》，在此書的啟發下，第二年丁酉年，天王陛下就昏迷數日，突發異夢。
在那詭譎莫名的異夢中，天王面見到了天父爺火華，甦醒後的一段時日內，天王就聲稱自己是天父爺火華第二子，天兄耶蘇的二弟。
至於史蒂文斯，在廣州布道偶遇天王已將近三十年，卻在半年之前，天國風雨飄搖之時，隻身來到天京。二人本只是在近三十年前，見過一面，但史蒂文斯卻在半年前來到後，受到了天王陛下的絕高禮遇，甚至天王還讓他長久居住於信王府中。
這和天王應該只有一面之緣的史蒂文斯，他分發給天王的啟蒙讀物《勸世良言》，甚至都是華人傳教士梁發所撰，和史蒂文斯沒有任何關係，但他卻享如此厚遇，這裡面絕有難言的秘密。而也正是從他的到來開始，天王不再見人，半年來靠著府內傳出的一道道詔令發號，甚至多地多有流傳，天王陛下，已經死了。
如今人心離散，城外清廷妖軍虎視眈眈。為了天國的未來，為了本應受天國庇佑，現今卻飽受飢寒之苦的萬千子民，兩月前，我還是安插了我僅有的一名探子，進了天王府。終於，在近十日前，我得到密報，天王已將他寬廣的寢房作為神堂，秘密拜著一尊金黃色的，身著長袍戴著面具的神像。
我雖然身為天王的族弟，五年前被拜干王，可統領千萬天官天將，但從香港入京這五年來，我手握實權僅僅數月，名義上在天國內，我一人之下萬人之上，但數年傾軋，再到如今“小天堂”天京斷糧數月，使得人心從未如此離散過，現在周身，算上護衛探子，我可信任的人都不過五指之數。
但外來的助力我還是順利找到了。而且在今天，我就會冒著政治生涯結束，乃至生命的危險，要在天王的面前，發掘他最隱晦的秘密。為了天國，為了萬民，為了我自年輕，就要拯救飽受摧殘的中國的夢想，我甘願捨棄一切。
……
……
待到掛上辰牌，我帶上早就準備好的一卷筆記，前往了天朝宮殿。在到達天朝宮殿求見天王時，我聲稱在《哥林多前書》內，找到了能證明，天王之前關於天父爺火華思想的解讀，有錯誤之處的片段，並請求親自為天王解說。
凡是涉及到天教、基督教問題的，天王都從不忽視。而對天父思想理解有誤，更不是小事。如我所料地等待許久，府中終於傳來了准許求見的口令。身為干王，我不用被搜身查驗就可進入天王府。而我終於能在多年後，得以近距離接觸到天王陛下。
走過依稀有著記憶的迴廊，果然，我被領到了天王的寢房。天王對所有人宣稱病危，由幼天王洪天貴福暫理國務，那麼他也只能作出病重的樣子，在床榻上召見我——天國危急，百姓苦不堪言，天王作為天國之主，居然閉於府中，寄希望於不明的異教，想到這裡，我心中更加鬱塞乃至憤懣。
雖然天王府中估計也是存糧無幾，但天王的寢房仍然華貴，寢房門一開，我就大致掃視了下，果然該收走的都沒有了，房內總體和以前無異。
天王臥於床上，外圍由顏色深沉，象徵王權的金黃床幔遮掩著。在我行跪拜禮時，婢女將我帶來的筆記遞入床幔內，透過紗幔，我瞥見天王坐起開始閱讀起筆記來。
“你們，都退下。”好一會兒後，天王終於下令屏退了奴婢護衛。這聲音內在的虛弱居然像是真實的，但這聲音又是如此陌生，竟沒有喚起我一絲關於天王的記憶。
“站起來吧，說說。”陌生虛弱的聲音下令道。我早早就打好了腹稿，開始瞭解說。天王十四年前在桂省金田村起義後，遠在外鄉的我逃離了清廷的追捕，在天國壬子二年抵達英吉利管轄的香港後，我就在瑞邦巴色會受洗，學習了數年正統基督新教和天文觀星，甚至任職過倫敦傳道會的布道師，就我對基督上帝的深刻見識，寫出一份準備甚久的筆記，暫時唬住天王陛下還是沒問題的。
我也假裝說得自己激動起來，在寢房內來回走動，我趁機觀察，想找到一些蛛絲馬跡，而天王也沒有阻止我，似乎還在認真地傾聽。
令我失望的是，可以看出來，這寬大的寢房在我進來前，已經過了忙而不亂的收整，沒有任何東西被落了下來。等我說完，天王點評了幾句，表示不能接受我的觀點，又語氣相當溫和地要我退出寢房。
我面無表情地由人引導著走在迴廊中，面前的年輕僕人越走越慢，待到四下無人，我倆挨得很近的時候，年輕僕人突然塞給我兩冊書本，接著他又像什麼也沒發生一樣，加快腳步走到我的前面繼續領路。
果然，我突然求見，就算他們再拖延時間收拾，只要是會把東西搬出房外，光天化日下也會露出行跡。看來我這安插在這裡的探子，在我留在寢房的時候，還是有所收穫的。
出府的時候也沒被搜身，回到干王府，進入書房，我就取出了兩冊書本,這時仔細來看，分別是一冊很厚本子以及一本薄書。`
	}
];

async function main() {
	for (const article of articles) {
		await prisma.article.upsert({
			where: { id: article.id },
			update: {
				title: article.title,
				content: article.content
			},
			create: {
				id: article.id,
				title: article.title,
				content: article.content
			}
		});
		const paragraphs = article.content.split('\n').filter((line) => line.trim().length > 0);
		for (const [i, paragraph] of paragraphs.entries()) {
			await prisma.paragraph.create({
				data: {
					articleId: article.id,
					text: paragraph,
					order: i
				}
			});
		}
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

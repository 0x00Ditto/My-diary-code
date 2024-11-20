export default function Translator(){
  const data = {
    "French": [
        "bonjour", "au revoir", "merci", "s'il vous plaît", "excusez-moi",
        "oui", "non", "amour", "famille", "amitié", "école", "ordinateur", 
        "livre", "table", "chaise", "maison", "voiture", "soleil", "lune", 
        "eau", "feu", "terre", "air", "ciel", "fleur", "arbre", "oiseau", 
        "chien", "chat", "poisson", "manger", "boire", "lire", "écrire", 
        "jouer", "danser", "chanter", "parler", "écouter", "regarder", "marcher", 
        "courir", "travailler", "dormir", "rêver", "apprendre", "comprendre", 
        "aider", "voyager", "visiter", "acheter", "vendre", "ouvrir", "fermer", 
        "porter", "laver", "nettoyer", "cuisiner", "couper", "construire", 
        "détruire", "chercher", "trouver", "perdre", "gagner", "choisir", 
        "changer", "ranger", "jouet", "cadeau", "argent", "temps", "heure", 
        "minute", "seconde", "jour", "nuit", "matin", "soir", "lundi", "mardi", 
        "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "janvier", 
        "février", "mars", "avril", "mai", "juin", "juillet", "août", 
        "septembre", "octobre", "novembre", "décembre"
    ],
    "English": [
        "hello", "goodbye", "thank you", "please", "excuse me", "yes", "no", 
        "love", "family", "friendship", "school", "computer", "book", "table", 
        "chair", "house", "car", "sun", "cmoon", "water", "fire", "earth", 
        "air", "sky", "flower", "tree", "bird", "dog", "cat", "fish", "eat", 
        "drink", "read", "write", "play", "dance", "sing", "speak", "listen", 
        "watch", "walk", "run", "work", "sleep", "dream", "learn", "understand", 
        "help", "travel", "visit", "buy", "sell", "open", "close", "wear", 
        "wash", "clean", "cook", "cut", "build", "destroy", "search", "find", 
        "lose", "win", "choose", "change", "tidy", "toy", "gift", "money", 
        "time", "hour", "minute", "second", "day", "night", "morning", "evening", 
        "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", 
        "sunday", "january", "february", "march", "april", "may", "june", 
        "july", "august", "september", "october", "november", "december"
    ],
    "Japanese": [
        "こんにちは", "さようなら", "ありがとう", "お願いします", "すみません", 
        "はい", "いいえ", "愛", "家族", "友情", "学校", "コンピュータ", 
        "本", "テーブル", "椅子", "家", "車", "太陽", "月", "水", 
        "火", "地球", "空気", "空", "花", "木", "鳥", "犬", "猫", 
        "魚", "食べる", "飲む", "読む", "書く", "遊ぶ", "踊る", "歌う", 
        "話す", "聞く", "見る", "歩く", "走る", "働く", "寝る", "夢", 
        "学ぶ", "理解する", "助ける", "旅行する", "訪問する", "買う", 
        "売る", "開ける", "閉める", "着る", "洗う", "掃除する", "料理する", 
        "切る", "建てる", "破壊する", "探す", "見つける", "失う", "勝つ", 
        "選ぶ", "変える", "整理する", "おもちゃ", "プレゼント", "お金", 
        "時間", "時", "分", "秒", "日", "夜", "朝", "夕方", 
        "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", 
        "日曜日", "1月", "2月", "3月", "4月", "5月", "6月", "7月", 
        "8月", "9月", "10月", "11月", "12月"
    ]
}

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
  <div className="flex justify-center mb-10">
    <form action="">
      <input type="text" placeholder="Enter Nothing" className="shadow-inner border rounded p-3 mr-2 outline-green-600"/>
      <button onClick={handleSubmit} type="submit" className="shadow-inner border p-3 rounded ml-2 hover:-translate-y-1 hover:duration-500 active:bg-black active:text-white">Submit</button>
    </form>
  </div>)
}
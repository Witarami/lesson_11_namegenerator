
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Валерия",
            "id_3": "Иванна",
            "id_4": "Алевтина",
            "id_5": "Дина",
            "id_6": "Нина",
            "id_7": "Милена",
            "id_8": "Дарья",
            "id_9": "Ева",
            "id_10": "Алевтина"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {  
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемьевич",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    professionMaleJson: `{
        "count": 5,
        "list": {  
            "id_1": "Шахтер",
            "id_2": "Слесарь",
            "id_3": "Монтажник",
            "id_4": "Кузнец",
            "id_5": "Кровельщик"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
        "list": {  
            "id_1": "Повар",
            "id_2": "Бухгалтер",
            "id_3": "Инженер",
            "id_4": "Учитель",
            "id_5": "Директор"
        }
    }`,
    monthBirthOddJson: `{
        "count": 7,
        "list": {  
            "id_1": "января",
            "id_2": "марта",
            "id_3": "мая",
            "id_4": "июля",
            "id_5": "августа",
            "id_6": "октября",
            "id_7": "декабря"
        }
    }`,    
    monthBirthElevenJson: `{
        "count": 11,
        "list": {  
            "id_1": "января",
            "id_2": "марта",
            "id_3": "апреля",
            "id_4": "мая",
            "id_5": "июня",
            "id_6": "июля",
            "id_7": "августа",
            "id_8": "сентября",
            "id_9": "октября",
            "id_10": "ноября",
            "id_11": "декабря"
        }
    }`, 
    monthBirthTwelveJson: `{
        "count": 12,
        "list": {  
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`, 

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => 
      Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
      const obj = JSON.parse(json);
      const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
      return obj.list[prop];
    },
    
    randomGender: function () {
      return this.randomIntNumber(1, 0) > 0
        ? this.GENDER_MALE 
        : this.GENDER_FEMALE;
    }, 

    randomSurname: function () {
      let randomSurname = this.randomValue(this.surnameJson);
      return (this.person.gender == this.GENDER_MALE)
        ? this.randomValue(this.surnameJson)
        : `${randomSurname}a`;
    },

    randomFirstName: function() {
      return (this.person.gender == this.GENDER_MALE)
        ? this.randomValue(this.firstNameMaleJson) 
        : this.randomValue(this.firstNameFemaleJson);
    },
    
    randomMiddleName: function() {
      let randomMiddleName = this.randomValue(this.middleNameMaleJson);
      return (this.person.gender == this.GENDER_MALE)
        ? randomMiddleName
        : randomMiddleName.replace("ич", "на");
    },

    randomDayBirth: function () {
      return this.randomIntNumber(31, 1);
    },

    randomMonthBirth: function () {
      let randomMonthBirth;
      if (30<this.person.DayBirt<=31) {
        randomMonthBirth = this.randomValue(this.monthBirthOddJson);
      } else if (29<this.person.DayBirt<=30) {
        randomMonthBirth = this.randomValue(this.monthBirthElevenJson);
      } else {
        randomMonthBirth = this.randomValue(this.monthBirthTwelveJson);
      }
      return randomMonthBirth;
    },

    randomBirthYear: function () {
      return this.randomIntNumber(2019, 1950);
      },

    randomProfession: function () {
      return (this.person.gender == this.GENDER_MALE)
        ? this.randomValue(this.professionMaleJson) 
        : this.randomValue(this.professionFemaleJson);
      },

    getPerson: function () {
      this.person = {};
      this.person.gender = this.randomGender();
      this.person.surname = this.randomSurname();
      this.person.firstName = this.randomFirstName();
      this.person.middleName = this.randomMiddleName();
      this.person.DayBirth = this.randomDayBirth();
      this.person.monthBirth = this.randomMonthBirth();
      this.person.birthYear = this.randomBirthYear();
      this.person.profession = this.randomProfession();
      return this.person;
    },
};


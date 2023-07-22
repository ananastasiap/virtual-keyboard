export class Keys {
  constructor({key, eventCode, changeWithShift, keySize, isControlKey}, languages) {
    this.key = key;
    this.eventCode = eventCode;
    this.changeWithShift = changeWithShift;
    this.keySize = keySize;
    this.isControlKey = isControlKey;

    this.domElementForKey = null;
    this.isUpperCase = false;
    this.languages = languages;
    this.language = this.languages[0];
  }

  getLocalizedValue(value) {
    const isMultiLanguage = value.ru && value.en;
    return isMultiLanguage ? value[this.language] : value;
  }

  get getterChangeWithShift() {
    return this.getLocalizedValue(this.changeWithShift);
  }

  get getterLang() {
    const regularKey = this.getLocalizedValue(this.key);
    const isUpperCaseAndNotControlKey = this.isUpperCase && !this.isControlKey;
    return isUpperCaseAndNotControlKey ? regularKey.toUpperCase() : regularKey;
  }

  updateKey(isActive,
            language = this.language,
            isUpperCase = this.isUpperCase,
            delay = 450) {
    this.language = language;
    this.isUpperCase = isUpperCase;

    if (isActive) {
      this.domElementForKey.classList.add('key__active');
      setTimeout(() => {this.domElementForKey.classList.remove('key__active');}, delay);
    }

    if (this.changeWithShift) {
      this.domElementForKey.dataset.changeWithShift = this.getterChangeWithShift;
    }

    this.domElementForKey.innerText = this.getterLang;
  }

  init() {
    this.domElementForKey = document.createElement('div');
    this.domElementForKey.classList.add('key');
    this.domElementForKey.dataset.code = this.eventCode;

    if(this.keySize) {
      this.domElementForKey.classList.add(`key__size-${this.keySize}`);
    }

    this.updateKey();
  }
}
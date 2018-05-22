import Word from "./word.model";

class WordsManager {
    constructor() {
        this.wordsList = [
            new Word('hello', ['xin chao', 'chao'], false),
            new Word('car', ['xe hoi'], false),
            new Word('hyposynthesys', ['gia thuyet'], false),
            new Word('Nazis', ['Duc Quoc Xa'], false),
            new Word('Autumn', ['Mua thu'], false),
            new Word('mankind', ['loai nguoi', 'con nguoi'], false),
        ]
    }

    addWord(newWord) {
        if (this.wordsList.length != 0) {
            let max = this.wordsList[0].id;
            this.wordsList.forEach(word => {
                if (max < word.id) max = word.id;
            })
            newWord.id = max + 1;
        } else {
            newWord.id = 1;
        }
        newWord.memorized = false;
        this.wordsList.unshift(newWord);
    }

    updateWord(word) {
        let index = this.wordsList.findIndex(w => word.id === w.id);
        this.wordsList[index] = word;
    }

    deleteWord(id){
        let index = this.wordsList.findIndex(w => id === w.id);
        this.wordsList.splice(index, 1);
    }

    sortByEn(){
        this.wordsList.sort((a, b) => a.en.toLowerCase() > b.en.toLowerCase() ? 1 : -1);
    }

    static getMemorized(){
        return this.wordsList.filter(word => word.memorized);
    }

    static getDidnotMemorized(){
        return this.wordsList.filter(word => !word.memorized);
    }

    static filterWord(name){
        return this.wordsList.filter(word => word.en.toLowerCase().indexOf(name) > -1);
    }
}

export default WordsManager;
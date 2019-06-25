let SongsManager = function () {
    let _songs = {

    }
    let _findIdentiferIndex = function (url) {
        for (let index in url) {
            if (url[index] == "=" && url[index-1] == "v" && url[index-2] == "?") {
                index++;
                return index;
            }
            else {
                continue;
            }
        }
            
    }
    let addSong = function (title,url) {
        let indx = _findIdentiferIndex(url)
        let identifier = url.slice(indx)
        _songs[title] = identifier
    }
    let getSong = function (title) {
        output = "https://www.youtube.com/watch?v=" + _songs[title]
        return output
    }
    return {
        addSong:addSong,
        getSong:getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
// console.log(songsManager.getSong("ain't me")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

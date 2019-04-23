const glob = require("glob") // for finding files/directories
const rimraf = require("rimraf") // for removing recursively

function clean(folder, target) {
    if (!folder || folder == "") {
        console.log("ERROR: No target folder found. Specify the target folder as argument!")
        return
    }
    
    const match = folder + "/**/" + target
    console.log("[Removing all files by query : " + match + " ]")
    
    glob(match, function (er, files) {
        for (let file of files) {
            // skip if the target is twice in path (we delete only the parent)
            if (file.search("." + target + ".") > 1) {
                continue
            }
            console.log("Removing " + file)
            rimraf.sync(file)
        }
    })
}

// clean nodemodules in specified folder
clean(process.argv[2], "node_modules/")


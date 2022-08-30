const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

;
(async () => {

    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGHT_ERROR_MSG)
        const result = File.csvToJson(filePath)

        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGHT_ERROR_MSG)
        const result = File.csvToJson(filePath)

        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
                "name": "diego luis",
                "id": 123,
                "profession": "javascript",
                "birthDay": 1997
            },
            {
                "name": "diana dias",
                "id": 321,
                "profession": "java spec",
                "birthDay": 1992
            },
            {
                "name": "vivi",
                "id": 231,
                "profession": "java senior",
                "birthDay": 1982
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))

    }

})()
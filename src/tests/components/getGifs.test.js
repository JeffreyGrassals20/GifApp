import {getGifs} from '../../Helpers/getGifs'
describe('getGifs Tests',() => {
    test('should return 10 elements ',async () => {
        const gifs = await getGifs('Lebron James')
        expect(gifs.length).toBe(10)
    })

    test('should return 10 elements ',async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
})
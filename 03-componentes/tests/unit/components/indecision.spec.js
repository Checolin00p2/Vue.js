import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision Component',()=>{
    let wrapper
    let clgSpy

    global.fetch = jest.fn(()=>Promise.resolve({
        json: ()=>Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(()=>{
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console,'log')
        jest.clearAllMocks()
    })

    test('1.-Debe hacer match con el snapshot',()=>{
        // const wrapper=shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('2.-Escribir no debe disparar nada(console.log)',async()=>{
        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    })
    test('3.-Escribir "?" debe disparar el fetch',async()=>{
        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })
    test('4.-Pruebas en getAnswer',async()=>{
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')
    })
    test('5.-Pruebas en getAnswer -  Fallo en el API',async()=>{
        fetch.mockImplementationOnce(()=>Promise.reject('Api is down'))
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')

    })
})
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'
describe('Counter Componenet',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=shallowMount(Counter)
    })
    /* test('Debe ser hacer match con el snapshot',()=>{

        // const wrapper=shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
    }) */
    test('h2 debe de tener un valor por defecto "Counter"',()=>{
        // const wrapper=shallowMount(Counter)
        const h2 = wrapper.find('h2')
        expect(h2.text()).toBe('Counter!!')

    })

    test('El valor por defecto debe ser 100 en el p',()=>{
        // Wrapper
        // const wrapper=shallowMount(Counter)
        // pTags
        const value = wrapper.find('[data-testid="counter"]').text()
        
        // expect segundo p ===100
        expect(value).toBe('100')

    })
    test('Debe incrementar y decrementar el contador en 1 el valor del contador',async()=>{
        // const wrapper=shallowMount(Counter)
        const [increaseBtn,decreaseBtn]=wrapper.findAll('button')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto',()=>{
        const {start} = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })

    test('Debe mostrar la prop title',()=>{
        const wrapper = shallowMount(Counter,{
            props:{
                title:'Hola mundo'
            }
        })
        expect(wrapper.find('h2').text()).toBe('Hola mundo!!')
    })
})
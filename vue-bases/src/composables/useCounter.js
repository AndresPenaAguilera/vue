
import { ref } from 'vue'

const useCounter = ( initValue = 5 ) => {

    const number = ref( initValue )

    return {
        number,

        decrease: () => number.value--,
        increase: () => number.value++,
    }

}


export default useCounter
import React, { useEffect, useState } from 'react'
import { TabDetail } from './TabDetail'
import { TabPanelWrapper } from './TabPanelWrapper'
import { TabSections } from './TabSections'

export const TabPannel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const data = [
        { title: 'tab1' },
        { title: 'tab2' },
        { title: 'tab3' }]

//     useEffect(() => {
//             alert('Mount.')
//             return () => {
//                 alert('Unmount.')
//             }
//     },[])

//     useEffect(() => {
//         alert('Update.')
// })

  return (
    <TabPanelWrapper>       
            {
                data.map((item, index) => <input type='button' value={ item.title} key={ item.title } onClick={ () => {
                    setActiveIndex(index)
                }}/>)
            }
            {/* <div>{ data[activeIndex].discreption }</div> */}
            <TabDetail value={ activeIndex } index={ 0 }>
                <TabSections />  
            </TabDetail>
            <TabDetail value={ activeIndex } index={ 1 }>{ data[activeIndex].discreption }</TabDetail>
            <TabDetail value={ activeIndex } index={ 2 }>{ data[activeIndex].discreption }</TabDetail>
    </TabPanelWrapper>
  )
}

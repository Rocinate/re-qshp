import { useQuery } from 'react-query'
// import { 
//   getClassList,
//   getNoticeList,
//   getList
// } from '@/apis';

// function Silder() {
//   const { isSuccess, data } =  useQuery('class-list', getClassList);
//   console.log(data);
//   return (
//     <div>
//       侧边栏
//     </div>
//   )
// }

function Hot() {
  return (
    <div>HOT</div>
  )
}

function Main() {
  return <div>
    <div>
      {/* <Silder /> */}
    </div>
    <div>居中页</div>
    <div>
      <Hot />
    </div>
  </div>
}
export default Main;

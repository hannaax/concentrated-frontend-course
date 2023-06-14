import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

export default function StaticRoutingPage() {
  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/1")
  }

  const onClickMove2 = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/2")
  }

  const onClickMove3 = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/3")
  }

  return (
    <div>
      <button onClick={onClickMove1}>1번 게시글 이동</button>
      <button onClick={onClickMove2}>2번 게시글 이동</button>
      <button onClick={onClickMove3}>3번 게시글 이동</button>
    </div>
  )
}

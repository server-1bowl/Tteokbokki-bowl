// members.ts
import { Request, Response } from "express";

// json에 보낼 데이터 배열 따로 빼주기
interface soptInfo {
  name: string;
  group: string;
}

const members : soptInfo[] = [
  {
      name: '정준서',
      group: "yb",
  },
  {
      name: '박수린',
      group: "yb",
  },
  {
      name: '유수화',
      group: "yb",
  }
]

const getMember = (req: Request, res: Response) => {
    return res.status(200).json({ //Status Code: 200은 성공을 의미..
        status: 200,
        message: "멤버 조회 성공",
        data: members
    });
};

const postMember = (req: Request, res: Response) => {
  const body = req.body;
  members.push(body);

  return res.status(200).json({ //Status Code: 200은 성공을 의미..
        status: 200,
        message: "멤버 조회 성공",
        data: members
    });
};

// 아래와 같은 방법도 있음 !
module.exports.getMember = getMember; 
module.exports.postMember =  postMember;


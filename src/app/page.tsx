import Badge from "@/components/badge";

export default function Home() {
  return (
    <div className="max-w-md space-y-4">
      {/* 기본 뱃지 */}
      <Badge>기본</Badge>

      {/* 성공 상태 뱃지 */}
      <Badge variant="success" size="md">
        완료
      </Badge>

      {/* 경고 아웃라인 뱃지 */}
      <Badge variant="warning" outlined>
        주의
      </Badge>

      {/* 에러 둥근 뱃지 */}
      <Badge variant="danger" rounded size="xs">
        오류
      </Badge>

      {/* 도트가 있는 정보 뱃지 */}
      <Badge variant="info" withDot>
        새 소식
      </Badge>
    </div>
  );
}

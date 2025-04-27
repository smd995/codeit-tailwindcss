import Input from "@/components/input";

export default function Home() {
  return (
    <div className="max-w-md space-y-4">
      <Input label="이메일" type="email" placeholder="example@email.com" />
      <Input
        label="비밀번호"
        type="password"
        variant="filled"
        error="비밀번호는 8자 이상이어야 합니다."
      />
      <Input label="사용자 이름" variant="outlined" size="lg" fullWidth />
      <Input
        label="개인정보 동의"
        variant="outlined"
        size="lg"
        disabled
        fullWidth
      />
    </div>
  );
}

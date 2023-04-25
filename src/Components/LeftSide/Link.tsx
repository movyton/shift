const Link = () => {
  return (
    <div className="link_wrapper">
      <span>shift</span>
      <a href="https://t.me/iamshift" className="telegram_link">
        <span>telegram channel</span>
        <div className="arrow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2826 14.5962C0.696815 15.182 0.696815 16.1317 1.2826 16.7175C1.86839 17.3033 2.81814 17.3033 3.40392 16.7175L1.2826 14.5962ZM17.157 2.34315C17.157 1.51473 16.4854 0.843153 15.657 0.843153L2.15697 0.843152C1.32854 0.843152 0.65697 1.51472 0.65697 2.34315C0.65697 3.17158 1.32854 3.84315 2.15697 3.84315H14.157V15.8432C14.157 16.6716 14.8285 17.3432 15.657 17.3432C16.4854 17.3432 17.157 16.6716 17.157 15.8432L17.157 2.34315ZM3.40392 16.7175L16.7176 3.40381L14.5963 1.28249L1.2826 14.5962L3.40392 16.7175Z"
              fill="black"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Link;

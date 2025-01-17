declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

interface Window {
  __ENV__QlBaseUrl: string;
  __ENV__DeployEnv: string;
  __ENV__QL_DIR: string;
}

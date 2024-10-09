type StepData = {
    _id: string;
    title: string;
    url: string;
    learned: boolean;
    description?: string;
    steps: Step[];
};
type Step = {
    title: string;
    description?: string;
    target?: string;
    _id: string;
};

type HandleStepsProps = {
    walkme: Walkme;
};
type StepWithDetails = {
    element: HTMLElement;
    elementRect: DOMRect;
} & Step;
declare class HandleSteps {
    steps: Step[];
    currentIndex: number;
    walkme: Walkme;
    currentStep: Step;
    started: boolean;
    isNextButtonDisabled: boolean;
    isPrevButtonDisabled: boolean;
    found: boolean;
    private interval;
    private maxIntervalCount;
    currentStepDetails: StepWithDetails | null;
    private stepUI;
    private resizeObserver;
    private initial;
    private debouncedResize;
    constructor({ walkme }: HandleStepsProps);
    private attachResizeEventListeners;
    private boundKeyboardEvent;
    private attachKeyboardListener;
    private removeKeyboardListener;
    getStepDetails(): Promise<StepWithDetails | null>;
    debounce<T extends (...args: unknown[]) => void>(callback: T, delay: number): (...args: Parameters<T>) => void;
    getCurrentStepDetails(): Promise<StepWithDetails>;
    smoothScroll(elem: HTMLElement, options?: ScrollIntoViewOptions): Promise<boolean>;
    disableButtons(): void;
    showCurrentStep(): Promise<void>;
    next(): void;
    prev(): void;
    start(): void;
    stop(): void;
    finish(): void;
    skip(): void;
}

type WalkmeProps = {
    stepData: StepData;
    onFinish?: (step: StepData) => void;
    onError?: (error: Error) => void;
    onSkip?: (stepData: StepData) => void;
};
declare class Walkme {
    stepData: StepData;
    isReady: boolean;
    currentIndex: number;
    onError: (error: Error) => void;
    onFinish: ((step: StepData) => void) | undefined;
    onSkip: ((stepData: StepData) => void) | undefined;
    started: boolean;
    handleSteps: HandleSteps;
    constructor({ stepData, onError, onFinish, onSkip }: WalkmeProps);
    start(): void;
    stop(): void;
    skip(): void;
    finish(): void;
}

export { type Step, type StepData, Walkme, type WalkmeProps };
